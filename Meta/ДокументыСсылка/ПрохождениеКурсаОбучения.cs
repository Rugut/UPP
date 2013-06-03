
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
	public partial class ПрохождениеКурсаОбучения:ДокументСсылка,IСериализаторProtoBuf,IСериализаторJson
	{
		public static readonly Guid ГуидКласса = new Guid("baa24956-3add-44eb-883f-26fe561fb6be");
		public static readonly DateTime ВерсияКласса = DateTime.ParseExact("20121221191915.000", new string[] {"yyyyMMddHHmmss.fff"}, CultureInfo.InvariantCulture, DateTimeStyles.None);
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
		public string/*8*/ Номер {get;set;}
		public bool Проведен {get;set;}
		public V82.СправочникиСсылка.КурсыОбучения КурсОбучения {get;set;}//Курс обучения
		///<summary>
		///Любая дополнительная информация
		///</summary>
		public string/*(0)*/ Комментарий {get;set;}
		public V82.СправочникиСсылка.Пользователи Ответственный {get;set;}
		public DateTime ДатаЗавершенияКурса {get;set;}//Дата завершения курса
		public bool ФактЗавершенияКурса {get;set;}//Факт завершения курса
		public V82.СправочникиСсылка.Мероприятия Мероприятие {get;set;}
		public V82.ДокументыСсылка.УчастиеВМероприятиях ДокументУчастияВМероприятии {get;set;}//Документ участия в мероприятии
		public string/*(100)*/ КраткийСоставДокумента {get;set;}//Краткий состав документа
		
		public ПрохождениеКурсаОбучения()
		{
		}
		
		public ПрохождениеКурсаОбучения(byte[] УникальныйИдентификатор)
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
					,_Fld14870RRef [КурсОбучения]
					,_Fld14871 [Комментарий]
					,_Fld14872RRef [Ответственный]
					,_Fld14873 [ДатаЗавершенияКурса]
					,_Fld14874 [ФактЗавершенияКурса]
					,_Fld14875RRef [Мероприятие]
					,_Fld14876RRef [ДокументУчастияВМероприятии]
					,_Fld14877 [КраткийСоставДокумента]
					From _Document543(NOLOCK)
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
							Комментарий = Читалка.GetString(5);
							ДатаЗавершенияКурса = Читалка.GetDateTime(7);
							ФактЗавершенияКурса = ((byte[])Читалка.GetValue(8))[0]==1;
							ДокументУчастияВМероприятии = new V82.ДокументыСсылка.УчастиеВМероприятиях((byte[])Читалка.GetValue(10));
							КраткийСоставДокумента = Читалка.GetString(11);
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
		
		public V82.ДокументыОбъект.ПрохождениеКурсаОбучения  ПолучитьОбъект()
		{
			var Объект = new V82.ДокументыОбъект.ПрохождениеКурсаОбучения();
			Объект._ЭтоНовый = false;
			Объект.Ссылка = Ссылка;
			Объект.Версия = Версия;
			Объект.ПометкаУдаления = ПометкаУдаления;
			Объект.Номер = Номер;
			Объект.КурсОбучения = КурсОбучения;
			Объект.Комментарий = Комментарий;
			Объект.Ответственный = Ответственный;
			Объект.ДатаЗавершенияКурса = ДатаЗавершенияКурса;
			Объект.ФактЗавершенияКурса = ФактЗавершенияКурса;
			Объект.Мероприятие = Мероприятие;
			Объект.ДокументУчастияВМероприятии = ДокументУчастияВМероприятии;
			Объект.КраткийСоставДокумента = КраткийСоставДокумента;
			return Объект;
		}
		
		private static readonly Hashtable Кэш = new Hashtable(1000);
		
		public static V82.ДокументыСсылка.ПрохождениеКурсаОбучения ВзятьИзКэша(byte[] УникальныйИдентификатор)
		{
			var УИ = new Guid(УникальныйИдентификатор);
			if (Кэш.ContainsKey(УИ))
			{
				return (V82.ДокументыСсылка.ПрохождениеКурсаОбучения)Кэш[УИ];
			}
			var Ссылка = new V82.ДокументыСсылка.ПрохождениеКурсаОбучения(УникальныйИдентификатор);
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