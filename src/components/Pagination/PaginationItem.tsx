import { Button } from "@chakra-ui/react"

interface PaginationItemProps {
  number: number;
  isCurrent?: boolean;
  onPageChange: (page: number) => void;
}

export function PaginationItem({ isCurrent = false, onPageChange, number }: PaginationItemProps) {
  if(isCurrent) {
    return (
      <Button size="sm" fontSize="xs" width="4" colorScheme="blue" disabled _disabled={{
        bgColor: 'blue.500',
        cursor: "default"
      }}>
        {number}
      </Button>
    )
  }

  return (
    <Button size="sm" fontSize="xs" width="4" bg="gray.700" onClick={() => onPageChange(number)} _hover={{
      bgColor: 'gray.500',
    }}>
      {number}
    </Button>
  )
}
