
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
	///<summary>
	///(Упр)
	///</summary>
	[ProtoContract]
	[DataContract]
	public partial class ПланПродаж:ДокументСсылка,IСериализаторProtoBuf,IСериализаторJson
	{
		public static readonly Guid ГуидКласса = new Guid("8b7cff2c-c229-40fc-a41f-020641dbed32");
		public static readonly DateTime ВерсияКласса = DateTime.ParseExact("20121221191541.000", new string[] {"yyyyMMddHHmmss.fff"}, CultureInfo.InvariantCulture, DateTimeStyles.None);
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
		public V82.СправочникиСсылка.Валюты ВалютаДокумента {get;set;}//Валюта документа
		public DateTime ДатаПланирования {get;set;}//Дата планирования
		///<summary>
		///Любая дополнительная информация
		///</summary>
		public string/*(0)*/ Комментарий {get;set;}
		public decimal/*(10)*/ КратностьДокумента {get;set;}//Кратность документа
		public decimal/*(10.4)*/ КурсДокумента {get;set;}//Курс документа
		public V82.СправочникиСсылка.Пользователи Ответственный {get;set;}
		public V82.СправочникиСсылка.Подразделения Подразделение {get;set;}
		public V82.СправочникиСсылка.Проекты Проект {get;set;}
		public V82.СправочникиСсылка.СценарииПланирования Сценарий {get;set;}
		///<summary>
		///Сумма в валюте документа, налоги включены согласно флагам
		///</summary>
		public decimal/*(15.2)*/ СуммаДокумента {get;set;}//Сумма документа
		public V82.СправочникиСсылка.ТипыЦенНоменклатуры ТипЦен {get;set;}//Тип цен
		public bool СуммаВключаетНДС {get;set;}//Сумма включает НДС
		public bool УчитыватьНДС {get;set;}//Учитывать НДС
		public ХранилищеЗначения НастройкиПомощникаПланирования {get;set;}//Настройки помощника планирования
		public V82.Перечисления/*Ссылка*/.Периодичность ПериодичностьДетализации {get;set;}//Периодичность детализации
		
		public ПланПродаж()
		{
		}
		
		public ПланПродаж(byte[] УникальныйИдентификатор)
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
					,_Fld12845RRef [ВалютаДокумента]
					,_Fld12846 [ДатаПланирования]
					,_Fld12847 [Комментарий]
					,_Fld12848 [КратностьДокумента]
					,_Fld12849 [КурсДокумента]
					,_Fld12850RRef [Ответственный]
					,_Fld12851RRef [Подразделение]
					,_Fld12852RRef [Проект]
					,_Fld12853RRef [Сценарий]
					,_Fld12854 [СуммаДокумента]
					,_Fld12855RRef [ТипЦен]
					,_Fld12856 [СуммаВключаетНДС]
					,_Fld12857 [УчитыватьНДС]
					,_Fld12858 [НастройкиПомощникаПланирования]
					,_Fld12859RRef [ПериодичностьДетализации]
					From _Document511(NOLOCK)
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
							ДатаПланирования = Читалка.GetDateTime(5);
							Комментарий = Читалка.GetString(6);
							КратностьДокумента = Читалка.GetDecimal(7);
							КурсДокумента = Читалка.GetDecimal(8);
							СуммаДокумента = Читалка.GetDecimal(13);
							СуммаВключаетНДС = ((byte[])Читалка.GetValue(15))[0]==1;
							УчитыватьНДС = ((byte[])Читалка.GetValue(16))[0]==1;
							ПериодичностьДетализации = V82.Перечисления/*Ссылка*/.Периодичность.ПустаяСсылка.Получить((byte[])Читалка.GetValue(18));
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
		
		public V82.ДокументыОбъект.ПланПродаж  ПолучитьОбъект()
		{
			var Объект = new V82.ДокументыОбъект.ПланПродаж();
			Объект._ЭтоНовый = false;
			Объект.Ссылка = Ссылка;
			Объект.Версия = Версия;
			Объект.ПометкаУдаления = ПометкаУдаления;
			Объект.Номер = Номер;
			Объект.ВалютаДокумента = ВалютаДокумента;
			Объект.ДатаПланирования = ДатаПланирования;
			Объект.Комментарий = Комментарий;
			Объект.КратностьДокумента = КратностьДокумента;
			Объект.КурсДокумента = КурсДокумента;
			Объект.Ответственный = Ответственный;
			Объект.Подразделение = Подразделение;
			Объект.Проект = Проект;
			Объект.Сценарий = Сценарий;
			Объект.СуммаДокумента = СуммаДокумента;
			Объект.ТипЦен = ТипЦен;
			Объект.СуммаВключаетНДС = СуммаВключаетНДС;
			Объект.УчитыватьНДС = УчитыватьНДС;
			Объект.НастройкиПомощникаПланирования = НастройкиПомощникаПланирования;
			Объект.ПериодичностьДетализации = ПериодичностьДетализации;
			return Объект;
		}
		
		private static readonly Hashtable Кэш = new Hashtable(1000);
		
		public static V82.ДокументыСсылка.ПланПродаж ВзятьИзКэша(byte[] УникальныйИдентификатор)
		{
			var УИ = new Guid(УникальныйИдентификатор);
			if (Кэш.ContainsKey(УИ))
			{
				return (V82.ДокументыСсылка.ПланПродаж)Кэш[УИ];
			}
			var Ссылка = new V82.ДокументыСсылка.ПланПродаж(УникальныйИдентификатор);
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