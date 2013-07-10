
using System;
using System.Collections;
using System.IO;
using System.Data.SqlClient;
using System.Globalization;
using System.Runtime.Serialization;
using ProtoBuf;/*https://github.com/ServiceStack/ServiceStack/tree/master/lib*/
using ServiceStack.Text;/*https://github.com/ServiceStack/ServiceStack.Text*/
using V82;
using V82.ОбщиеОбъекты;
using V82.ДокументыСсылка;
using V82.ДокументыСсылка;
using V82.Перечисления;//Ссылка;
namespace V82.ДокументыСсылка
{
	[ProtoContract]
	[DataContract]
	public partial class ЗапросНаИнформационноеОбслуживаниеНалогоплательщика:ДокументСсылка,IСериализаторProtoBuf,IСериализаторJson
	{
		public static readonly Guid ГуидКласса = new Guid("41bcbf63-2fbe-4bfb-b4df-0d6cb6dc4da1");
		public static readonly DateTime ВерсияКласса = DateTime.ParseExact("20120928011938.000", new string[] {"yyyyMMddHHmmss.fff"}, CultureInfo.InvariantCulture, DateTimeStyles.None);
		public static readonly long КонтрольнаяСуммаКласса = 123;
		[DataMember]
		[ProtoMember(1)]
		public Guid Ссылка {get;set;}
		[DataMember]
		[ProtoMember(2)]
		public long Версия {get;set;}
		public string ВерсияДанных {get;set;}
		/*static хэш сумма состава и порядка реквизитов*/
		/*версия класса восстановленного из пакета*/
		public bool ПометкаУдаления {get;set;}
		public DateTime Дата {get;set;}
		public DateTime ПрефиксНомера {get;set;}
		public string/*11*/ Номер {get;set;}
		public bool Проведен {get;set;}
		public V82.СправочникиСсылка.Организации Организация {get;set;}
		public V82.СправочникиСсылка.РегистрацияВИФНС Получатель {get;set;}
		public DateTime ДатаНачалаПериода {get;set;}//Дата начала периода
		public DateTime ДатаОкончанияПериода {get;set;}//Дата окончания периода
		public V82.Перечисления/*Ссылка*/.ВидыУслугПриИОН ВидУслуги {get;set;}//Вид услуги
		public V82.Перечисления/*Ссылка*/.ФорматОтветаНаЗапросИОН ФорматОтвета {get;set;}//Формат ответа
		public string/*(0)*/ АдресПредставленияСправки {get;set;}//Адрес представления справки
		public decimal/*(1)*/ ДополнительныйПараметр {get;set;}//Дополнительный параметр
		public V82.Перечисления/*Ссылка*/.ФорматыДокументооборотаСФНС ФорматЗапроса {get;set;}//Формат запроса
		
		public ЗапросНаИнформационноеОбслуживаниеНалогоплательщика()
		{
		}
		
		public ЗапросНаИнформационноеОбслуживаниеНалогоплательщика(byte[] УникальныйИдентификатор)
		{
			using (var Подключение = new SqlConnection(СтрокаСоединения))
			{
				Подключение.Open();
				using (var Команда = Подключение.CreateCommand())
				{
					Команда.CommandText = @"Select top 1 
					_IDRRef [Ссылка]
					,_Version [Версия]
					,_Marked [ПометкаУдаления]
					,_Number [Номер]
					,_Fld24205RRef [Организация]
					,_Fld24206RRef [Получатель]
					,_Fld24207 [ДатаНачалаПериода]
					,_Fld24208 [ДатаОкончанияПериода]
					,_Fld24209RRef [ВидУслуги]
					,_Fld24210RRef [ФорматОтвета]
					,_Fld24211 [АдресПредставленияСправки]
					,_Fld24212 [ДополнительныйПараметр]
					,_Fld24213RRef [ФорматЗапроса]
					From _Document23145(NOLOCK)
					Where _IDRRef=@УникальныйИдентификатор";
					Команда.Parameters.AddWithValue("УникальныйИдентификатор", УникальныйИдентификатор);
					using (var Читалка = Команда.ExecuteReader())
					{
						if (Читалка.Read())
						{
							//ToDo: Читать нужно через GetValues()
							Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							ВерсияДанных =  Convert.ToBase64String(ПотокВерсии);
							ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1;
							Номер = Читалка.GetString(3);
							ДатаНачалаПериода = Читалка.GetDateTime(6);
							ДатаОкончанияПериода = Читалка.GetDateTime(7);
							ВидУслуги = V82.Перечисления/*Ссылка*/.ВидыУслугПриИОН.ПустаяСсылка.Получить((byte[])Читалка.GetValue(8));
							ФорматОтвета = V82.Перечисления/*Ссылка*/.ФорматОтветаНаЗапросИОН.ПустаяСсылка.Получить((byte[])Читалка.GetValue(9));
							АдресПредставленияСправки = Читалка.GetString(10);
							ДополнительныйПараметр = Читалка.GetDecimal(11);
							ФорматЗапроса = V82.Перечисления/*Ссылка*/.ФорматыДокументооборотаСФНС.ПустаяСсылка.Получить((byte[])Читалка.GetValue(12));
							//return Ссылка;
						}
						else
						{
							//return null;
						}
					}
				}
			}
		}
		
		public V82.ДокументыОбъект.ЗапросНаИнформационноеОбслуживаниеНалогоплательщика  ПолучитьОбъект()
		{
			var Объект = new V82.ДокументыОбъект.ЗапросНаИнформационноеОбслуживаниеНалогоплательщика();
			Объект._ЭтоНовый = false;
			Объект.Ссылка = Ссылка;
			Объект.Версия = Версия;
			Объект.ПометкаУдаления = ПометкаУдаления;
			Объект.Номер = Номер;
			Объект.Организация = Организация;
			Объект.Получатель = Получатель;
			Объект.ДатаНачалаПериода = ДатаНачалаПериода;
			Объект.ДатаОкончанияПериода = ДатаОкончанияПериода;
			Объект.ВидУслуги = ВидУслуги;
			Объект.ФорматОтвета = ФорматОтвета;
			Объект.АдресПредставленияСправки = АдресПредставленияСправки;
			Объект.ДополнительныйПараметр = ДополнительныйПараметр;
			Объект.ФорматЗапроса = ФорматЗапроса;
			return Объект;
		}
		
		private static readonly Hashtable Кэш = new Hashtable(1000);
		
		public static V82.ДокументыСсылка.ЗапросНаИнформационноеОбслуживаниеНалогоплательщика ВзятьИзКэша(byte[] УникальныйИдентификатор)
		{
			var УИ = new Guid(УникальныйИдентификатор);
			if (Кэш.ContainsKey(УИ))
			{
				return (V82.ДокументыСсылка.ЗапросНаИнформационноеОбслуживаниеНалогоплательщика)Кэш[УИ];
			}
			var Ссылка = new V82.ДокументыСсылка.ЗапросНаИнформационноеОбслуживаниеНалогоплательщика(УникальныйИдентификатор);
			Кэш.Add(УИ, Ссылка);
			return Ссылка;
		}
		
		public void СериализацияProtoBuf(Stream Поток)
		{
			Serializer.Serialize(Поток,this);
		}
		
		public string СериализацияJson()
		{
			return this.ToJson();
		}
		
		public string СериализацияXml()
		{
			return this.ToXml();
		}
	}
}