
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
	public partial class ПроизвольныйЭД:ДокументСсылка,IСериализаторProtoBuf,IСериализаторJson
	{
		public static readonly Guid ГуидКласса = new Guid("2a208e13-0827-47d9-b7e6-e2fac34b39e4");
		public static readonly DateTime ВерсияКласса = DateTime.ParseExact("20121221191635.000", new string[] {"yyyyMMddHHmmss.fff"}, CultureInfo.InvariantCulture, DateTimeStyles.None);
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
		public string/*(0)*/ Комментарий {get;set;}
		public V82.СправочникиСсылка.Контрагенты Контрагент {get;set;}
		public V82.Перечисления/*Ссылка*/.НаправленияЭД Направление {get;set;}
		public V82.СправочникиСсылка.Организации Организация {get;set;}
		public bool Прочитан {get;set;}
		public V82.Перечисления/*Ссылка*/.СтатусыЭД СтатусДокумента {get;set;}//Статус документа
		public string/*(0)*/ Текст {get;set;}
		
		public ПроизвольныйЭД()
		{
		}
		
		public ПроизвольныйЭД(byte[] УникальныйИдентификатор)
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
					,_Fld14863 [Комментарий]
					,_Fld14864RRef [Контрагент]
					,_Fld14865RRef [Направление]
					,_Fld14866RRef [Организация]
					,_Fld14867 [Прочитан]
					,_Fld14868RRef [СтатусДокумента]
					,_Fld14869 [Текст]
					From _Document542(NOLOCK)
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
							Комментарий = Читалка.GetString(4);
							Направление = V82.Перечисления/*Ссылка*/.НаправленияЭД.ПустаяСсылка.Получить((byte[])Читалка.GetValue(6));
							Прочитан = ((byte[])Читалка.GetValue(8))[0]==1;
							СтатусДокумента = V82.Перечисления/*Ссылка*/.СтатусыЭД.ПустаяСсылка.Получить((byte[])Читалка.GetValue(9));
							Текст = Читалка.GetString(10);
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
		
		public V82.ДокументыОбъект.ПроизвольныйЭД  ПолучитьОбъект()
		{
			var Объект = new V82.ДокументыОбъект.ПроизвольныйЭД();
			Объект._ЭтоНовый = false;
			Объект.Ссылка = Ссылка;
			Объект.Версия = Версия;
			Объект.ПометкаУдаления = ПометкаУдаления;
			Объект.Номер = Номер;
			Объект.Комментарий = Комментарий;
			Объект.Контрагент = Контрагент;
			Объект.Направление = Направление;
			Объект.Организация = Организация;
			Объект.Прочитан = Прочитан;
			Объект.СтатусДокумента = СтатусДокумента;
			Объект.Текст = Текст;
			return Объект;
		}
		
		private static readonly Hashtable Кэш = new Hashtable(1000);
		
		public static V82.ДокументыСсылка.ПроизвольныйЭД ВзятьИзКэша(byte[] УникальныйИдентификатор)
		{
			var УИ = new Guid(УникальныйИдентификатор);
			if (Кэш.ContainsKey(УИ))
			{
				return (V82.ДокументыСсылка.ПроизвольныйЭД)Кэш[УИ];
			}
			var Ссылка = new V82.ДокументыСсылка.ПроизвольныйЭД(УникальныйИдентификатор);
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