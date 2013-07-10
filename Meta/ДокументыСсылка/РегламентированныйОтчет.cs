
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
	///(Общ)
	///</summary>
	[ProtoContract]
	[DataContract]
	public partial class РегламентированныйОтчет:ДокументСсылка,IСериализаторProtoBuf,IСериализаторJson
	{
		public static readonly Guid ГуидКласса = new Guid("1deb1e94-3af2-43e3-8a4d-c67d29b07574");
		public static readonly DateTime ВерсияКласса = DateTime.ParseExact("20120928012004.000", new string[] {"yyyyMMddHHmmss.fff"}, CultureInfo.InvariantCulture, DateTimeStyles.None);
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
		public bool Проведен {get;set;}
		///<summary>
		///(Общ) Имя встроенной или имя файла внешней обработки
		///</summary>
		public string/*(254)*/ ИсточникОтчета {get;set;}//Источник отчета
		///<summary>
		///(Общ) Наименование регламентированного отчета
		///</summary>
		public string/*(100)*/ НаименованиеОтчета {get;set;}//Наименование отчета
		///<summary>
		///(Общ)
		///</summary>
		public V82.СправочникиСсылка.Организации Организация {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		public DateTime ДатаНачала {get;set;}//Дата начала
		///<summary>
		///(Общ)
		///</summary>
		public DateTime ДатаОкончания {get;set;}//Дата окончания
		///<summary>
		///(Общ) Дата подписи
		///</summary>
		public DateTime ДатаПодписи {get;set;}//Дата подписи
		///<summary>
		///(Общ) Периодичность представления отчета
		///</summary>
		public V82.Перечисления/*Ссылка*/.Периодичность Периодичность {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		public V82.Перечисления/*Ссылка*/.ПорядкиОкругленияОтчетности ЕдиницаИзмерения {get;set;}//Единица измерения
		///<summary>
		///(Общ)
		///</summary>
		public decimal/*(1)*/ ТочностьЕдиницыИзмерения {get;set;}//Точность единицы измерения
		///<summary>
		///(Общ)
		///</summary>
		public string/*(0)*/ ВыбраннаяФорма {get;set;}//Выбранная форма
		///<summary>
		///(Общ) Сохраненные данные отчета
		///</summary>
		public ХранилищеЗначения ДанныеОтчета {get;set;}//Данные отчета
		///<summary>
		///(Общ) Дерево со списком настроек страниц
		///</summary>
		public ХранилищеЗначения ДеревоНастройкиСтраниц {get;set;}//Дерево настройки страниц
		///<summary>
		///(Общ)
		///</summary>
		public V82.Перечисления/*Ссылка*/.ВидыОтчетности ВидОтчетности {get;set;}//Вид отчетности
		public string/*(0)*/ Комментарий {get;set;}
		public string/*(4)*/ КодИМНС {get;set;}//Код ИФНС
		public string/*(4)*/ КодИМНСПосредника {get;set;}//Код ИФНС-посредника
		public string/*(30)*/ ФорматВыгрузки {get;set;}//Формат выгрузки
		public decimal/*(3)*/ Вид {get;set;}
		public string/*(16)*/ Период {get;set;}
		public string/*(9)*/ КПП {get;set;}
		
		public РегламентированныйОтчет()
		{
		}
		
		public РегламентированныйОтчет(byte[] УникальныйИдентификатор)
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
					,_Fld11253 [ИсточникОтчета]
					,_Fld11254 [НаименованиеОтчета]
					,_Fld11255RRef [Организация]
					,_Fld11256 [ДатаНачала]
					,_Fld11257 [ДатаОкончания]
					,_Fld11258 [ДатаПодписи]
					,_Fld11259RRef [Периодичность]
					,_Fld11260RRef [ЕдиницаИзмерения]
					,_Fld11261 [ТочностьЕдиницыИзмерения]
					,_Fld11262 [ВыбраннаяФорма]
					,_Fld11263 [ДанныеОтчета]
					,_Fld11264 [ДеревоНастройкиСтраниц]
					,_Fld11265RRef [ВидОтчетности]
					,_Fld11266 [Комментарий]
					,_Fld11267 [КодИМНС]
					,_Fld22670 [КодИМНСПосредника]
					,_Fld11268 [ФорматВыгрузки]
					,_Fld11269 [Вид]
					,_Fld27288 [Период]
					,_Fld27289 [КПП]
					From _Document441(NOLOCK)
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
							ИсточникОтчета = Читалка.GetString(3);
							НаименованиеОтчета = Читалка.GetString(4);
							ДатаНачала = Читалка.GetDateTime(6);
							ДатаОкончания = Читалка.GetDateTime(7);
							ДатаПодписи = Читалка.GetDateTime(8);
							Периодичность = V82.Перечисления/*Ссылка*/.Периодичность.ПустаяСсылка.Получить((byte[])Читалка.GetValue(9));
							ЕдиницаИзмерения = V82.Перечисления/*Ссылка*/.ПорядкиОкругленияОтчетности.ПустаяСсылка.Получить((byte[])Читалка.GetValue(10));
							ТочностьЕдиницыИзмерения = Читалка.GetDecimal(11);
							ВыбраннаяФорма = Читалка.GetString(12);
							ВидОтчетности = V82.Перечисления/*Ссылка*/.ВидыОтчетности.ПустаяСсылка.Получить((byte[])Читалка.GetValue(15));
							Комментарий = Читалка.GetString(16);
							КодИМНС = Читалка.GetString(17);
							КодИМНСПосредника = Читалка.GetString(18);
							ФорматВыгрузки = Читалка.GetString(19);
							Вид = Читалка.GetDecimal(20);
							Период = Читалка.GetString(21);
							КПП = Читалка.GetString(22);
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
		
		public V82.ДокументыОбъект.РегламентированныйОтчет  ПолучитьОбъект()
		{
			var Объект = new V82.ДокументыОбъект.РегламентированныйОтчет();
			Объект._ЭтоНовый = false;
			Объект.Ссылка = Ссылка;
			Объект.Версия = Версия;
			Объект.ПометкаУдаления = ПометкаУдаления;
			Объект.ИсточникОтчета = ИсточникОтчета;
			Объект.НаименованиеОтчета = НаименованиеОтчета;
			Объект.Организация = Организация;
			Объект.ДатаНачала = ДатаНачала;
			Объект.ДатаОкончания = ДатаОкончания;
			Объект.ДатаПодписи = ДатаПодписи;
			Объект.Периодичность = Периодичность;
			Объект.ЕдиницаИзмерения = ЕдиницаИзмерения;
			Объект.ТочностьЕдиницыИзмерения = ТочностьЕдиницыИзмерения;
			Объект.ВыбраннаяФорма = ВыбраннаяФорма;
			Объект.ДанныеОтчета = ДанныеОтчета;
			Объект.ДеревоНастройкиСтраниц = ДеревоНастройкиСтраниц;
			Объект.ВидОтчетности = ВидОтчетности;
			Объект.Комментарий = Комментарий;
			Объект.КодИМНС = КодИМНС;
			Объект.КодИМНСПосредника = КодИМНСПосредника;
			Объект.ФорматВыгрузки = ФорматВыгрузки;
			Объект.Вид = Вид;
			Объект.Период = Период;
			Объект.КПП = КПП;
			return Объект;
		}
		
		private static readonly Hashtable Кэш = new Hashtable(1000);
		
		public static V82.ДокументыСсылка.РегламентированныйОтчет ВзятьИзКэша(byte[] УникальныйИдентификатор)
		{
			var УИ = new Guid(УникальныйИдентификатор);
			if (Кэш.ContainsKey(УИ))
			{
				return (V82.ДокументыСсылка.РегламентированныйОтчет)Кэш[УИ];
			}
			var Ссылка = new V82.ДокументыСсылка.РегламентированныйОтчет(УникальныйИдентификатор);
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