
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
	public partial class СписаниеОС:ДокументСсылка,IСериализаторProtoBuf,IСериализаторJson
	{
		public static readonly Guid ГуидКласса = new Guid("8daffed9-fd2b-4c80-8acf-f42bdb5fb6e6");
		public static readonly DateTime ВерсияКласса = DateTime.ParseExact("20121221191539.000", new string[] {"yyyyMMddHHmmss.fff"}, CultureInfo.InvariantCulture, DateTimeStyles.None);
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
		public V82.СправочникиСсылка.Пользователи Ответственный {get;set;}
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
		public bool ОтражатьВБухгалтерскомУчете {get;set;}//Отражать в бухгалтерском учете
		///<summary>
		///(Общ)
		///</summary>
		public bool ОтражатьВНалоговомУчете {get;set;}//Отражать в налоговом учете
		///<summary>
		///(Общ)
		///</summary>
		public bool ОтражатьВУправленческомУчете {get;set;}//Отражать в управленческом учете
		///<summary>
		///(Общ)
		///</summary>
		public V82.СправочникиСсылка.ПричиныСписания ПричинаСписания {get;set;}//Причина списания
		///<summary>
		///(Общ)
		///</summary>
		public V82.СправочникиСсылка.СобытияОС Событие {get;set;}
		///<summary>
		///(Регл)
		///</summary>
		public object СчетСписанияБУ {get;set;}//Счет списания БУ
		///<summary>
		///(Регл)
		///</summary>
		public object СчетСписанияНУ {get;set;}//Счет списания НУ
		///<summary>
		///(Регл)
		///</summary>
		public object СубконтоБУ {get;set;}//Субконто БУ
		///<summary>
		///(Регл)
		///</summary>
		public object СубконтоНУ {get;set;}//Субконто НУ
		///<summary>
		///(Общ)
		///</summary>
		public V82.СправочникиСсылка.СобытияОС СобытиеРегл {get;set;}//Событие (регл)
		
		public СписаниеОС()
		{
		}
		
		public СписаниеОС(byte[] УникальныйИдентификатор)
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
					,_Fld17379RRef [Ответственный]
					,_Fld17380 [Комментарий]
					,_Fld17381RRef [Организация]
					,_Fld17382 [ОтражатьВБухгалтерскомУчете]
					,_Fld17383 [ОтражатьВНалоговомУчете]
					,_Fld17384 [ОтражатьВУправленческомУчете]
					,_Fld17385RRef [ПричинаСписания]
					,_Fld17386RRef [Событие]
					,_Fld17387RRef [СчетСписанияБУ]
					,_Fld17388RRef [СчетСписанияНУ]
					,_Fld17389RRef [СубконтоБУ]
					,_Fld17390RRef [СубконтоНУ]
					,_Fld17391RRef [СобытиеРегл]
					From _Document595(NOLOCK)
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
							ОтражатьВБухгалтерскомУчете = ((byte[])Читалка.GetValue(7))[0]==1;
							ОтражатьВНалоговомУчете = ((byte[])Читалка.GetValue(8))[0]==1;
							ОтражатьВУправленческомУчете = ((byte[])Читалка.GetValue(9))[0]==1;
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
		
		public V82.ДокументыОбъект.СписаниеОС  ПолучитьОбъект()
		{
			var Объект = new V82.ДокументыОбъект.СписаниеОС();
			Объект._ЭтоНовый = false;
			Объект.Ссылка = Ссылка;
			Объект.Версия = Версия;
			Объект.ПометкаУдаления = ПометкаУдаления;
			Объект.Номер = Номер;
			Объект.Ответственный = Ответственный;
			Объект.Комментарий = Комментарий;
			Объект.Организация = Организация;
			Объект.ОтражатьВБухгалтерскомУчете = ОтражатьВБухгалтерскомУчете;
			Объект.ОтражатьВНалоговомУчете = ОтражатьВНалоговомУчете;
			Объект.ОтражатьВУправленческомУчете = ОтражатьВУправленческомУчете;
			Объект.ПричинаСписания = ПричинаСписания;
			Объект.Событие = Событие;
			Объект.СчетСписанияБУ = СчетСписанияБУ;
			Объект.СчетСписанияНУ = СчетСписанияНУ;
			Объект.СубконтоБУ = СубконтоБУ;
			Объект.СубконтоНУ = СубконтоНУ;
			Объект.СобытиеРегл = СобытиеРегл;
			return Объект;
		}
		
		private static readonly Hashtable Кэш = new Hashtable(1000);
		
		public static V82.ДокументыСсылка.СписаниеОС ВзятьИзКэша(byte[] УникальныйИдентификатор)
		{
			var УИ = new Guid(УникальныйИдентификатор);
			if (Кэш.ContainsKey(УИ))
			{
				return (V82.ДокументыСсылка.СписаниеОС)Кэш[УИ];
			}
			var Ссылка = new V82.ДокументыСсылка.СписаниеОС(УникальныйИдентификатор);
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