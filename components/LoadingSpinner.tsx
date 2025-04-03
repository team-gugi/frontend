export default function LoadingSpinner() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center gap-8">
        <div className="w-48 h-48 border-4  border-MainColor animate-spin"></div>
        <span className="text-12 text-SemiBlack font-normal">
          실시간 순위 불러오는 중
        </span>
      </div>
    </div>
  );
}
