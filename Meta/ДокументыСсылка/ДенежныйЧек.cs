
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
	///(Упр) Чек на получение наличных денег с расчетного счета
	///</summary>
	[ProtoContract]
	[DataContract]
	public partial class ДенежныйЧек:ДокументСсылка,IСериализаторProtoBuf,IСериализаторJson
	{
		public static readonly Guid ГуидКласса = new Guid("819b9a69-74d9-48be-a262-02501893c121");
		public static readonly DateTime ВерсияКласса = DateTime.ParseExact("20121221191803.000", new string[] {"yyyyMMddHHmmss.fff"}, CultureInfo.InvariantCulture, DateTimeStyles.None);
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
		///<summary>
		///Банковский счет организации
		///</summary>
		public V82.СправочникиСсылка.БанковскиеСчета СчетОрганизации {get;set;}//Счет организации
		public V82.СправочникиСсылка.Кассы Касса {get;set;}
		public V82.СправочникиСсылка.Валюты ВалютаДокумента {get;set;}//Валюта документа
		public decimal/*(15.2)*/ СуммаДокумента {get;set;}//Сумма документа
		public V82.СправочникиСсылка.Пользователи Ответственный {get;set;}
		public bool Оплачено {get;set;}
		public DateTime ДатаОплаты {get;set;}//Дата оплаты
		public V82.СправочникиСсылка.СтатьиДвиженияДенежныхСредств СтатьяДвиженияДенежныхСредств {get;set;}//Статья движения денежных средств
		///<summary>
		///(Общ) Любая дополнительная информация
		///</summary>
		public string/*(0)*/ Комментарий {get;set;}
		
		public ДенежныйЧек()
		{
		}
		
		public ДенежныйЧек(byte[] УникальныйИдентификатор)
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
					,_Fld6763RRef [Организация]
					,_Fld6764RRef [СчетОрганизации]
					,_Fld6765RRef [Касса]
					,_Fld6766RRef [ВалютаДокумента]
					,_Fld6767 [СуммаДокумента]
					,_Fld6768RRef [Ответственный]
					,_Fld6769 [Оплачено]
					,_Fld6770 [ДатаОплаты]
					,_Fld6771RRef [СтатьяДвиженияДенежныхСредств]
					,_Fld6772 [Комментарий]
					From _Document353(NOLOCK)
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
							СуммаДокумента = Читалка.GetDecimal(8);
							Оплачено = ((byte[])Читалка.GetValue(10))[0]==1;
							ДатаОплаты = Читалка.GetDateTime(11);
							Комментарий = Читалка.GetString(13);
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
		
		public V82.ДокументыОбъект.ДенежныйЧек  ПолучитьОбъект()
		{
			var Объект = new V82.ДокументыОбъект.ДенежныйЧек();
			Объект._ЭтоНовый = false;
			Объект.Ссылка = Ссылка;
			Объект.Версия = Версия;
			Объект.ПометкаУдаления = ПометкаУдаления;
			Объект.Номер = Номер;
			Объект.Организация = Организация;
			Объект.СчетОрганизации = СчетОрганизации;
			Объект.Касса = Касса;
			Объект.ВалютаДокумента = ВалютаДокумента;
			Объект.СуммаДокумента = СуммаДокумента;
			Объект.Ответственный = Ответственный;
			Объект.Оплачено = Оплачено;
			Объект.ДатаОплаты = ДатаОплаты;
			Объект.СтатьяДвиженияДенежныхСредств = СтатьяДвиженияДенежныхСредств;
			Объект.Комментарий = Комментарий;
			return Объект;
		}
		
		private static readonly Hashtable Кэш = new Hashtable(1000);
		
		public static V82.ДокументыСсылка.ДенежныйЧек ВзятьИзКэша(byte[] УникальныйИдентификатор)
		{
			var УИ = new Guid(УникальныйИдентификатор);
			if (Кэш.ContainsKey(УИ))
			{
				return (V82.ДокументыСсылка.ДенежныйЧек)Кэш[УИ];
			}
			var Ссылка = new V82.ДокументыСсылка.ДенежныйЧек(УникальныйИдентификатор);
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