
using System;
using System.Runtime.Serialization;
using V82;
using V82.Перечисления;//Ссылка;
namespace V82.Перечисления//Ссылка
{
	[DataContract]
	public enum СпецоператорыСвязи
	{
		[NonSerialized]
		ПустаяСсылка = - 1,
		[EnumMember(Value = "{\"Ссылка\":\"0ba08225-c324-4107-8bbd-e96b656a01db\", \"Представление\":\"КалугаАстрал\"}")]
		КалугаАстрал = 0,//ЗАО "Калуга Астрал"
		[EnumMember(Value = "{\"Ссылка\":\"21beff88-6224-47ab-a3bb-2bfca33b3d03\", \"Представление\":\"Такском\"}")]
		Такском = 1,//ООО "Такском"
		[EnumMember(Value = "{\"Ссылка\":\"3f953bbf-d6b4-488a-ad31-0d8b3dca4b58\", \"Представление\":\"Прочие\"}")]
		Прочие = 2,//Прочий спецоператор
		[EnumMember(Value = "{\"Ссылка\":\"afb600b1-5347-4613-bc01-b4275081f9b0\", \"Представление\":\"Форус\"}")]
		Форус = 3,//ООО НПФ "Форус"
	}
	public static partial class СпецоператорыСвязи_Значения//:ПеречислениеСсылка
	{
		public static readonly Guid КалугаАстрал = new Guid("6be9bd8b-6a65-db01-4107-c3240ba08225");//ЗАО "Калуга Астрал"
		public static readonly Guid Такском = new Guid("fc2bbba3-3ba3-033d-47ab-622421beff88");//ООО "Такском"
		public static readonly Guid Прочие = new Guid("8b0d31ad-ca3d-584b-488a-d6b43f953bbf");//Прочий спецоператор
		public static readonly Guid Форус = new Guid("27b401bc-8150-b0f9-4613-5347afb600b1");//ООО НПФ "Форус"
		public static СпецоператорыСвязи Получить(this СпецоператорыСвязи Значение, byte[] Ссылка)
		{
			return Получить(Значение, new Guid(Ссылка));
		}
		public static СпецоператорыСвязи Получить(this СпецоператорыСвязи Значение, Guid Ссылка)
		{
			if(Ссылка == КалугаАстрал)
			{
				return СпецоператорыСвязи.КалугаАстрал;
			}
			else if(Ссылка == Такском)
			{
				return СпецоператорыСвязи.Такском;
			}
			else if(Ссылка == Прочие)
			{
				return СпецоператорыСвязи.Прочие;
			}
			else if(Ссылка == Форус)
			{
				return СпецоператорыСвязи.Форус;
			}
			return СпецоператорыСвязи.ПустаяСсылка;
		}
		public static byte[] Ключ(this СпецоператорыСвязи Значение)
		{
			return Ссылка(Значение).ToByteArray();
		}
		public static Guid Ссылка(this СпецоператорыСвязи Значение)
		{
			switch (Значение)
			{
				case СпецоператорыСвязи.КалугаАстрал: return КалугаАстрал;
				case СпецоператорыСвязи.Такском: return Такском;
				case СпецоператорыСвязи.Прочие: return Прочие;
				case СпецоператорыСвязи.Форус: return Форус;
			}
			return Guid.Empty;
		}
	}
}