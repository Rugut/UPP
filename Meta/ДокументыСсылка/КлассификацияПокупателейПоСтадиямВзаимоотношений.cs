
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
	public partial class КлассификацияПокупателейПоСтадиямВзаимоотношений:ДокументСсылка,IСериализаторProtoBuf,IСериализаторJson
	{
		public static readonly Guid ГуидКласса = new Guid("8b5a7039-3b1f-4a55-9858-05e0455ab3f9");
		public static readonly DateTime ВерсияКласса = DateTime.ParseExact("20121221190946.000", new string[] {"yyyyMMddHHmmss.fff"}, CultureInfo.InvariantCulture, DateTimeStyles.None);
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
		public DateTime ДатаОкончания {get;set;}//Дата окончания
		public V82.Перечисления/*Ссылка*/.Периодичность Периодичность {get;set;}
		public decimal/*(3)*/ КоличествоПериодовАнализа {get;set;}//Количество периодов анализа
		public decimal/*(10)*/ РазовыйПокупательНач {get;set;}//Разовый покупатель нач
		public decimal/*(10)*/ РазовыйПокупательКон {get;set;}//Разовый покупатель кон
		public decimal/*(15.2)*/ XКлассНач {get;set;}//X класс нач
		public decimal/*(15.2)*/ XКлассКон {get;set;}//X класс кон
		public decimal/*(15.2)*/ YКлассНач {get;set;}//Y класс нач
		public decimal/*(15.2)*/ YКлассКон {get;set;}//Y класс кон
		public decimal/*(15.2)*/ ZКлассНач {get;set;}//Z класс нач
		public decimal/*(15.2)*/ ZКлассКон {get;set;}//Z класс кон
		public string/*(0)*/ Комментарий {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		public V82.СправочникиСсылка.Пользователи Ответственный {get;set;}
		
		public КлассификацияПокупателейПоСтадиямВзаимоотношений()
		{
		}
		
		public КлассификацияПокупателейПоСтадиямВзаимоотношений(byte[] УникальныйИдентификатор)
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
					,_Fld8634 [ДатаОкончания]
					,_Fld8635RRef [Периодичность]
					,_Fld8636 [КоличествоПериодовАнализа]
					,_Fld8637 [РазовыйПокупательНач]
					,_Fld8638 [РазовыйПокупательКон]
					,_Fld8639 [XКлассНач]
					,_Fld8640 [XКлассКон]
					,_Fld8641 [YКлассНач]
					,_Fld8642 [YКлассКон]
					,_Fld8643 [ZКлассНач]
					,_Fld8644 [ZКлассКон]
					,_Fld8645 [Комментарий]
					,_Fld8646RRef [Ответственный]
					From _Document413(NOLOCK)
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
							ДатаОкончания = Читалка.GetDateTime(4);
							Периодичность = V82.Перечисления/*Ссылка*/.Периодичность.ПустаяСсылка.Получить((byte[])Читалка.GetValue(5));
							КоличествоПериодовАнализа = Читалка.GetDecimal(6);
							РазовыйПокупательНач = Читалка.GetDecimal(7);
							РазовыйПокупательКон = Читалка.GetDecimal(8);
							XКлассНач = Читалка.GetDecimal(9);
							XКлассКон = Читалка.GetDecimal(10);
							YКлассНач = Читалка.GetDecimal(11);
							YКлассКон = Читалка.GetDecimal(12);
							ZКлассНач = Читалка.GetDecimal(13);
							ZКлассКон = Читалка.GetDecimal(14);
							Комментарий = Читалка.GetString(15);
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
		
		public V82.ДокументыОбъект.КлассификацияПокупателейПоСтадиямВзаимоотношений  ПолучитьОбъект()
		{
			var Объект = new V82.ДокументыОбъект.КлассификацияПокупателейПоСтадиямВзаимоотношений();
			Объект._ЭтоНовый = false;
			Объект.Ссылка = Ссылка;
			Объект.Версия = Версия;
			Объект.ПометкаУдаления = ПометкаУдаления;
			Объект.Номер = Номер;
			Объект.ДатаОкончания = ДатаОкончания;
			Объект.Периодичность = Периодичность;
			Объект.КоличествоПериодовАнализа = КоличествоПериодовАнализа;
			Объект.РазовыйПокупательНач = РазовыйПокупательНач;
			Объект.РазовыйПокупательКон = РазовыйПокупательКон;
			Объект.XКлассНач = XКлассНач;
			Объект.XКлассКон = XКлассКон;
			Объект.YКлассНач = YКлассНач;
			Объект.YКлассКон = YКлассКон;
			Объект.ZКлассНач = ZКлассНач;
			Объект.ZКлассКон = ZКлассКон;
			Объект.Комментарий = Комментарий;
			Объект.Ответственный = Ответственный;
			return Объект;
		}
		
		private static readonly Hashtable Кэш = new Hashtable(1000);
		
		public static V82.ДокументыСсылка.КлассификацияПокупателейПоСтадиямВзаимоотношений ВзятьИзКэша(byte[] УникальныйИдентификатор)
		{
			var УИ = new Guid(УникальныйИдентификатор);
			if (Кэш.ContainsKey(УИ))
			{
				return (V82.ДокументыСсылка.КлассификацияПокупателейПоСтадиямВзаимоотношений)Кэш[УИ];
			}
			var Ссылка = new V82.ДокументыСсылка.КлассификацияПокупателейПоСтадиямВзаимоотношений(УникальныйИдентификатор);
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