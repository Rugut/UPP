
using System;
using V82;
using V82.Перечисления;//Ссылка;
namespace V82.Перечисления//Ссылка
{
	public enum НаправленияЭД
	{
		ПустаяСсылка = - 1,
		Входящий = 0,
		Интеркампани = 1,//Между организациями
		Исходящий = 2,
	}
	public static partial class НаправленияЭД_Значения//:ПеречислениеСсылка
	{
		public static readonly Guid Входящий = new Guid("35655ba6-a7f3-a268-4894-5fb1abef7262");
		public static readonly Guid Интеркампани = new Guid("9084308c-be3f-b01b-4826-bf9003ddc270");//Между организациями
		public static readonly Guid Исходящий = new Guid("c073c6bb-6c7b-c36e-42bf-9020b68175ec");
		public static НаправленияЭД Получить(this НаправленияЭД Значение, byte[] Ссылка)
		{
			return Получить(Значение, new Guid(Ссылка));
		}
		public static НаправленияЭД Получить(this НаправленияЭД Значение, Guid Ссылка)
		{
			if(Ссылка == Входящий)
			{
				return НаправленияЭД.Входящий;
			}
			else if(Ссылка == Интеркампани)
			{
				return НаправленияЭД.Интеркампани;
			}
			else if(Ссылка == Исходящий)
			{
				return НаправленияЭД.Исходящий;
			}
			return НаправленияЭД.ПустаяСсылка;
		}
		public static byte[] Ключ(this НаправленияЭД Значение)
		{
			return Ссылка(Значение).ToByteArray();
		}
		public static Guid Ссылка(this НаправленияЭД Значение)
		{
			switch (Значение)
			{
				case НаправленияЭД.Входящий: return Входящий;
				case НаправленияЭД.Интеркампани: return Интеркампани;
				case НаправленияЭД.Исходящий: return Исходящий;
			}
			return Guid.Empty;
		}
	}
}
