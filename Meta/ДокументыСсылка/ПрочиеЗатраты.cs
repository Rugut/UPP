
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
	public partial class ПрочиеЗатраты:ДокументСсылка,IСериализаторProtoBuf,IСериализаторJson
	{
		public static readonly Guid ГуидКласса = new Guid("6f4b2ef0-d7b8-48be-98e5-b23b01f1db1c");
		public static readonly DateTime ВерсияКласса = DateTime.ParseExact("20120928012031.000", new string[] {"yyyyMMddHHmmss.fff"}, CultureInfo.InvariantCulture, DateTimeStyles.None);
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
		///(Общ)
		///</summary>
		public V82.Перечисления/*Ссылка*/.ВидыОперацийПрочиеЗатраты ВидОперации {get;set;}//Вид операции
		///<summary>
		///(Общ) Любая дополнительная информация
		///</summary>
		public string/*(0)*/ Комментарий {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		public V82.СправочникиСсылка.Организации Организация {get;set;}
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
		///(Упр)
		///</summary>
		public V82.СправочникиСсылка.Подразделения Подразделение {get;set;}
		///<summary>
		///(Регл)
		///</summary>
		public V82.СправочникиСсылка.ПодразделенияОрганизаций ПодразделениеОрганизации {get;set;}//Подразделение организации
		///<summary>
		///(Регл)
		///</summary>
		public object Счет {get;set;}
		///<summary>
		///(Регл)
		///</summary>
		public object Субконто1 {get;set;}//Субконто 1
		///<summary>
		///(Регл)
		///</summary>
		public object Субконто2 {get;set;}//Субконто 2
		///<summary>
		///(Регл)
		///</summary>
		public object Субконто3 {get;set;}//Субконто 3
		///<summary>
		///(Регл)
		///</summary>
		public object СчетНУ {get;set;}//Счет (налоговый учет)
		///<summary>
		///(Регл)
		///</summary>
		public object СубконтоНУ1 {get;set;}//Субконто 1 (налоговый учет)
		///<summary>
		///(Регл)
		///</summary>
		public object СубконтоНУ2 {get;set;}//Субконто 2 (налоговый учет)
		///<summary>
		///(Регл)
		///</summary>
		public object СубконтоНУ3 {get;set;}//Субконто 3 (налоговый учет)
		public object Проект {get;set;}
		
		public ПрочиеЗатраты()
		{
		}
		
		public ПрочиеЗатраты(byte[] УникальныйИдентификатор)
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
					,_Fld10225RRef [ВидОперации]
					,_Fld10227 [Комментарий]
					,_Fld10228RRef [Организация]
					,_Fld10229RRef [Ответственный]
					,_Fld10230 [ОтражатьВУправленческомУчете]
					,_Fld10231 [ОтражатьВБухгалтерскомУчете]
					,_Fld10232 [ОтражатьВНалоговомУчете]
					,_Fld10233RRef [Подразделение]
					,_Fld10234RRef [ПодразделениеОрганизации]
					,_Fld10235RRef [Счет]
					,_Fld10236RRef [Субконто1]
					,_Fld10237RRef [Субконто2]
					,_Fld10238RRef [Субконто3]
					,_Fld10239RRef [СчетНУ]
					,_Fld10240RRef [СубконтоНУ1]
					,_Fld10241RRef [СубконтоНУ2]
					,_Fld10242RRef [СубконтоНУ3]
					,_Fld10243_TYPE [Проект_Тип],_Fld10243_RRRef [Проект],_Fld10243_RTRef [Проект_Вид]
					From _Document415(NOLOCK)
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
							ВидОперации = V82.Перечисления/*Ссылка*/.ВидыОперацийПрочиеЗатраты.ПустаяСсылка.Получить((byte[])Читалка.GetValue(4));
							Комментарий = Читалка.GetString(5);
							ОтражатьВУправленческомУчете = ((byte[])Читалка.GetValue(8))[0]==1;
							ОтражатьВБухгалтерскомУчете = ((byte[])Читалка.GetValue(9))[0]==1;
							ОтражатьВНалоговомУчете = ((byte[])Читалка.GetValue(10))[0]==1;
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
		
		public V82.ДокументыОбъект.ПрочиеЗатраты  ПолучитьОбъект()
		{
			var Объект = new V82.ДокументыОбъект.ПрочиеЗатраты();
			Объект._ЭтоНовый = false;
			Объект.Ссылка = Ссылка;
			Объект.Версия = Версия;
			Объект.ПометкаУдаления = ПометкаУдаления;
			Объект.Номер = Номер;
			Объект.ВидОперации = ВидОперации;
			Объект.Комментарий = Комментарий;
			Объект.Организация = Организация;
			Объект.Ответственный = Ответственный;
			Объект.ОтражатьВУправленческомУчете = ОтражатьВУправленческомУчете;
			Объект.ОтражатьВБухгалтерскомУчете = ОтражатьВБухгалтерскомУчете;
			Объект.ОтражатьВНалоговомУчете = ОтражатьВНалоговомУчете;
			Объект.Подразделение = Подразделение;
			Объект.ПодразделениеОрганизации = ПодразделениеОрганизации;
			Объект.Счет = Счет;
			Объект.Субконто1 = Субконто1;
			Объект.Субконто2 = Субконто2;
			Объект.Субконто3 = Субконто3;
			Объект.СчетНУ = СчетНУ;
			Объект.СубконтоНУ1 = СубконтоНУ1;
			Объект.СубконтоНУ2 = СубконтоНУ2;
			Объект.СубконтоНУ3 = СубконтоНУ3;
			Объект.Проект = Проект;
			return Объект;
		}
		
		private static readonly Hashtable Кэш = new Hashtable(1000);
		
		public static V82.ДокументыСсылка.ПрочиеЗатраты ВзятьИзКэша(byte[] УникальныйИдентификатор)
		{
			var УИ = new Guid(УникальныйИдентификатор);
			if (Кэш.ContainsKey(УИ))
			{
				return (V82.ДокументыСсылка.ПрочиеЗатраты)Кэш[УИ];
			}
			var Ссылка = new V82.ДокументыСсылка.ПрочиеЗатраты(УникальныйИдентификатор);
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