
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
	///(упр)
	///</summary>
	[ProtoContract]
	[DataContract]
	public partial class ВнутреннееПеремещениеНаличныхДенежныхСредств:ДокументСсылка,IСериализаторProtoBuf,IСериализаторJson
	{
		public static readonly Guid ГуидКласса = new Guid("b513375b-e704-4963-b5a0-fd8cba4d8f05");
		public static readonly DateTime ВерсияКласса = DateTime.ParseExact("20120928011953.000", new string[] {"yyyyMMddHHmmss.fff"}, CultureInfo.InvariantCulture, DateTimeStyles.None);
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
		///<summary>
		///(упр)
		///</summary>
		public V82.СправочникиСсылка.Кассы Касса {get;set;}//Касса 
		///<summary>
		///(упр)
		///</summary>
		public V82.СправочникиСсылка.Кассы КассаПолучатель {get;set;}//Касса  - получатель
		///<summary>
		///(Общ)
		///</summary>
		public V82.СправочникиСсылка.Валюты ВалютаДокумента {get;set;}//Валюта документа
		///<summary>
		///(Общ) Сумма в валюте документа, налоги включены согласно флагам
		///</summary>
		public decimal/*(15.2)*/ СуммаДокумента {get;set;}//Сумма документа
		///<summary>
		///(Общ)
		///</summary>
		public bool Оплачено {get;set;}
		///<summary>
		///(Регл)
		///</summary>
		public V82.СправочникиСсылка.СтатьиДвиженияДенежныхСредств СтатьяДвиженияДенежныхСредств {get;set;}//Статья движения денежных средств
		///<summary>
		///(Общ)
		///</summary>
		public V82.СправочникиСсылка.Пользователи Ответственный {get;set;}
		///<summary>
		///(Общ) Любая дополнительная информация
		///</summary>
		public string/*(0)*/ Комментарий {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		public V82.СправочникиСсылка.Организации ОрганизацияОтправитель {get;set;}//Организация отправитель
		///<summary>
		///(Общ)
		///</summary>
		public V82.СправочникиСсылка.Организации ОрганизацияПолучатель {get;set;}//Организация получатель
		
		public ВнутреннееПеремещениеНаличныхДенежныхСредств()
		{
		}
		
		public ВнутреннееПеремещениеНаличныхДенежныхСредств(byte[] УникальныйИдентификатор)
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
					,_Fld3457RRef [Касса]
					,_Fld3458RRef [КассаПолучатель]
					,_Fld3459RRef [ВалютаДокумента]
					,_Fld3460 [СуммаДокумента]
					,_Fld3461 [Оплачено]
					,_Fld3462RRef [СтатьяДвиженияДенежныхСредств]
					,_Fld3463RRef [Ответственный]
					,_Fld3464 [Комментарий]
					,_Fld3465RRef [ОрганизацияОтправитель]
					,_Fld18395RRef [ОрганизацияПолучатель]
					From _Document228(NOLOCK)
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
							СуммаДокумента = Читалка.GetDecimal(7);
							Оплачено = ((byte[])Читалка.GetValue(8))[0]==1;
							Комментарий = Читалка.GetString(11);
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
		
		public V82.ДокументыОбъект.ВнутреннееПеремещениеНаличныхДенежныхСредств  ПолучитьОбъект()
		{
			var Объект = new V82.ДокументыОбъект.ВнутреннееПеремещениеНаличныхДенежныхСредств();
			Объект._ЭтоНовый = false;
			Объект.Ссылка = Ссылка;
			Объект.Версия = Версия;
			Объект.ПометкаУдаления = ПометкаУдаления;
			Объект.Номер = Номер;
			Объект.Касса = Касса;
			Объект.КассаПолучатель = КассаПолучатель;
			Объект.ВалютаДокумента = ВалютаДокумента;
			Объект.СуммаДокумента = СуммаДокумента;
			Объект.Оплачено = Оплачено;
			Объект.СтатьяДвиженияДенежныхСредств = СтатьяДвиженияДенежныхСредств;
			Объект.Ответственный = Ответственный;
			Объект.Комментарий = Комментарий;
			Объект.ОрганизацияОтправитель = ОрганизацияОтправитель;
			Объект.ОрганизацияПолучатель = ОрганизацияПолучатель;
			return Объект;
		}
		
		private static readonly Hashtable Кэш = new Hashtable(1000);
		
		public static V82.ДокументыСсылка.ВнутреннееПеремещениеНаличныхДенежныхСредств ВзятьИзКэша(byte[] УникальныйИдентификатор)
		{
			var УИ = new Guid(УникальныйИдентификатор);
			if (Кэш.ContainsKey(УИ))
			{
				return (V82.ДокументыСсылка.ВнутреннееПеремещениеНаличныхДенежныхСредств)Кэш[УИ];
			}
			var Ссылка = new V82.ДокументыСсылка.ВнутреннееПеремещениеНаличныхДенежныхСредств(УникальныйИдентификатор);
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