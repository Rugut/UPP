
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
	public partial class ИнвентаризацияНЗП:ДокументСсылка,IСериализаторProtoBuf,IСериализаторJson
	{
		public static readonly Guid ГуидКласса = new Guid("2104394c-da4e-45af-bdb6-4ef8f45d7341");
		public static readonly DateTime ВерсияКласса = DateTime.ParseExact("20121221191906.000", new string[] {"yyyyMMddHHmmss.fff"}, CultureInfo.InvariantCulture, DateTimeStyles.None);
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
		///(Упр)
		///</summary>
		public V82.СправочникиСсылка.Подразделения Подразделение {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		public V82.СправочникиСсылка.Организации Организация {get;set;}
		///<summary>
		///(Общ) Любая дополнительная информация
		///</summary>
		public string/*(0)*/ Комментарий {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		public V82.СправочникиСсылка.Пользователи Ответственный {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		public bool ОтражатьВУправленческомУчете {get;set;}//Отражать в управленческом учете
		///<summary>
		///(Общ)
		///</summary>
		public bool ОтражатьВБухгалтерскомУчете {get;set;}//Отражать в бухгалтерском учете
		///<summary>
		///(Общ)
		///</summary>
		public bool ОтражатьВНалоговомУчете {get;set;}//Отражать в налоговом учете
		///<summary>
		///(Общ)
		///</summary>
		public object Заказ {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		public V82.СправочникиСсылка.СтатьиЗатрат СтатьяЗатрат {get;set;}//Статья затрат
		///<summary>
		///(Общ)
		///</summary>
		public bool ВводитьЗаказыПоСтрокам {get;set;}//Вводить заказы по строкам
		///<summary>
		///(Упр)
		///</summary>
		public V82.СправочникиСсылка.НоменклатурныеГруппы НоменклатурнаяГруппа {get;set;}//Номенклатурная группа
		///<summary>
		///(Общ)
		///</summary>
		public bool ВводитьНоменклатурныеГруппыПоСтрокам {get;set;}//Вводить номенклатурные группы по строкам
		///<summary>
		///(Регл)
		///</summary>
		public V82.СправочникиСсылка.ПодразделенияОрганизаций ПодразделениеОрганизации {get;set;}//Подразделение организации
		
		public ИнвентаризацияНЗП()
		{
		}
		
		public ИнвентаризацияНЗП(byte[] УникальныйИдентификатор)
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
					,_Fld8176RRef [Подразделение]
					,_Fld8177RRef [Организация]
					,_Fld8178 [Комментарий]
					,_Fld8179RRef [Ответственный]
					,_Fld8180 [ОтражатьВУправленческомУчете]
					,_Fld8181 [ОтражатьВБухгалтерскомУчете]
					,_Fld8182 [ОтражатьВНалоговомУчете]
					,_Fld8183_TYPE [Заказ_Тип],_Fld8183_RRRef [Заказ],_Fld8183_RTRef [Заказ_Вид]
					,_Fld8184RRef [СтатьяЗатрат]
					,_Fld8185 [ВводитьЗаказыПоСтрокам]
					,_Fld8186RRef [НоменклатурнаяГруппа]
					,_Fld8187 [ВводитьНоменклатурныеГруппыПоСтрокам]
					,_Fld8188RRef [ПодразделениеОрганизации]
					From _Document403(NOLOCK)
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
							Комментарий = Читалка.GetString(6);
							ОтражатьВУправленческомУчете = ((byte[])Читалка.GetValue(8))[0]==1;
							ОтражатьВБухгалтерскомУчете = ((byte[])Читалка.GetValue(9))[0]==1;
							ОтражатьВНалоговомУчете = ((byte[])Читалка.GetValue(10))[0]==1;
							ВводитьЗаказыПоСтрокам = ((byte[])Читалка.GetValue(15))[0]==1;
							ВводитьНоменклатурныеГруппыПоСтрокам = ((byte[])Читалка.GetValue(17))[0]==1;
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
		
		public V82.ДокументыОбъект.ИнвентаризацияНЗП  ПолучитьОбъект()
		{
			var Объект = new V82.ДокументыОбъект.ИнвентаризацияНЗП();
			Объект._ЭтоНовый = false;
			Объект.Ссылка = Ссылка;
			Объект.Версия = Версия;
			Объект.ПометкаУдаления = ПометкаУдаления;
			Объект.Номер = Номер;
			Объект.Подразделение = Подразделение;
			Объект.Организация = Организация;
			Объект.Комментарий = Комментарий;
			Объект.Ответственный = Ответственный;
			Объект.ОтражатьВУправленческомУчете = ОтражатьВУправленческомУчете;
			Объект.ОтражатьВБухгалтерскомУчете = ОтражатьВБухгалтерскомУчете;
			Объект.ОтражатьВНалоговомУчете = ОтражатьВНалоговомУчете;
			Объект.Заказ = Заказ;
			Объект.СтатьяЗатрат = СтатьяЗатрат;
			Объект.ВводитьЗаказыПоСтрокам = ВводитьЗаказыПоСтрокам;
			Объект.НоменклатурнаяГруппа = НоменклатурнаяГруппа;
			Объект.ВводитьНоменклатурныеГруппыПоСтрокам = ВводитьНоменклатурныеГруппыПоСтрокам;
			Объект.ПодразделениеОрганизации = ПодразделениеОрганизации;
			return Объект;
		}
		
		private static readonly Hashtable Кэш = new Hashtable(1000);
		
		public static V82.ДокументыСсылка.ИнвентаризацияНЗП ВзятьИзКэша(byte[] УникальныйИдентификатор)
		{
			var УИ = new Guid(УникальныйИдентификатор);
			if (Кэш.ContainsKey(УИ))
			{
				return (V82.ДокументыСсылка.ИнвентаризацияНЗП)Кэш[УИ];
			}
			var Ссылка = new V82.ДокументыСсылка.ИнвентаризацияНЗП(УникальныйИдентификатор);
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