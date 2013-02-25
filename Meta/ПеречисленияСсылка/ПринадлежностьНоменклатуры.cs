
using System;
using System.Runtime.Serialization;
using V82;
using V82.Перечисления;//Ссылка;
namespace V82.Перечисления//Ссылка
{
	[DataContract]
	public enum ПринадлежностьНоменклатуры
	{
		[NonSerialized]
		ПустаяСсылка = - 1,
		[EnumMember(Value = "{\"Ссылка\":\"fb4195cb-5036-4ede-b318-6a87b7868576\", \"Представление\":\"Принятый\"}")]
		Принятый = 0,
	}
	public static partial class ПринадлежностьНоменклатуры_Значения//:ПеречислениеСсылка
	{
		public static readonly Guid Принятый = new Guid("876a18b3-86b7-7685-4ede-5036fb4195cb");
		public static ПринадлежностьНоменклатуры Получить(this ПринадлежностьНоменклатуры Значение, byte[] Ссылка)
		{
			return Получить(Значение, new Guid(Ссылка));
		}
		public static ПринадлежностьНоменклатуры Получить(this ПринадлежностьНоменклатуры Значение, Guid Ссылка)
		{
			if(Ссылка == Принятый)
			{
				return ПринадлежностьНоменклатуры.Принятый;
			}
			return ПринадлежностьНоменклатуры.ПустаяСсылка;
		}
		public static byte[] Ключ(this ПринадлежностьНоменклатуры Значение)
		{
			return Ссылка(Значение).ToByteArray();
		}
		public static Guid Ссылка(this ПринадлежностьНоменклатуры Значение)
		{
			switch (Значение)
			{
				case ПринадлежностьНоменклатуры.Принятый: return Принятый;
			}
			return Guid.Empty;
		}
	}
}