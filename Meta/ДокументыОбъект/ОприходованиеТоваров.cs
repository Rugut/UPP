
using System;
using System.Data.SqlClient;
using System.Globalization;
using System.Runtime.Serialization;
using ProtoBuf;/*https://github.com/ServiceStack/ServiceStack/tree/master/lib*/
using ServiceStack.Text;/*https://github.com/ServiceStack/ServiceStack.Text*/
using V82;
using V82.ОбщиеОбъекты;
using V82.ДокументыСсылка;
using V82.ДокументыОбъект;
using V82.ДокументыСсылка;
using V82.Перечисления;//Ссылка;
namespace V82.ДокументыОбъект
{
	///<summary>
	///(Общ)
	///</summary>
	[ProtoContract]
	[DataContract]
	public partial class ОприходованиеТоваров:ДокументОбъект
	{
		public bool _ЭтоНовый;
		public bool ЭтоНовый()
		{
			return _ЭтоНовый;
		}
		[DataMember]
		[ProtoMember(1)]
		public Guid Ссылка {get;set;}
		[DataMember]
		[ProtoMember(2)]
		public long Версия {get;set;}
		[DataMember]
		[ProtoMember(3)]
		public string ВерсияДанных {get;set;}
		/*static хэш сумма состава и порядка реквизитов*/
		/*версия класса восстановленного из пакета*/
		[DataMember]
		[ProtoMember(4)]
		public bool ПометкаУдаления {get;set;}
		[DataMember]
		[ProtoMember(5)]
		public DateTime Дата {get;set;}
		[DataMember]
		[ProtoMember(6)]
		public DateTime ПрефиксНомера {get;set;}
		[DataMember]
		[ProtoMember(7)]
		public string/*11*/ Номер {get;set;}
		[DataMember]
		[ProtoMember(8)]
		public bool Проведен {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(9)]
		public V82.СправочникиСсылка.Организации Организация {get;set;}
		///<summary>
		///(Упр)
		///</summary>
		[DataMember]
		[ProtoMember(10)]
		public V82.СправочникиСсылка.Подразделения Подразделение {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(11)]
		public V82.СправочникиСсылка.Склады Склад {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(12)]
		public bool ОтражатьВУправленческомУчете {get;set;}//Отражать в управленческом учете
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(13)]
		public bool ОтражатьВБухгалтерскомУчете {get;set;}//Отражать в бухгалтерском учете
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(14)]
		public bool ОтражатьВНалоговомУчете {get;set;}//Отражать в налоговом учете
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(15)]
		public V82.СправочникиСсылка.ТипыЦенНоменклатуры ТипЦен {get;set;}//Тип цен
		///<summary>
		///(Общ) Сумма в валюте документа, налоги включены согласно флагам
		///</summary>
		[DataMember]
		[ProtoMember(16)]
		public decimal/*(15.2)*/ СуммаДокумента {get;set;}//Сумма документа
		///<summary>
		///(Общ) Основание (статья) оприходования
		///</summary>
		[DataMember]
		[ProtoMember(17)]
		public string/*(0)*/ Основание {get;set;}
		///<summary>
		///(Общ) Любая дополнительная информация
		///</summary>
		[DataMember]
		[ProtoMember(18)]
		public string/*(0)*/ Комментарий {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(19)]
		public V82.ДокументыСсылка.ИнвентаризацияТоваровНаСкладе ИнвентаризацияТоваровНаСкладе {get;set;}//Инвентаризация товаров на складе
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(20)]
		public V82.СправочникиСсылка.Пользователи Ответственный {get;set;}
		///<summary>
		///(Регл.) Сумма в валюте регламентированного учета, налоги включены согласно флагам
		///</summary>
		[DataMember]
		[ProtoMember(21)]
		public decimal/*(15.2)*/ СуммаДокументаРегл {get;set;}//Сумма документа (регл.)
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(22)]
		public object КоррСчет {get;set;}//Корр. счет
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(23)]
		public object Субконто1 {get;set;}
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(24)]
		public object Субконто2 {get;set;}//Субконто 2
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(25)]
		public object Субконто3 {get;set;}//Субконто 3
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(26)]
		public object КоррСчетНУ {get;set;}//Корр. счет (НУ)
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(27)]
		public object СубконтоНУ1 {get;set;}//Субконто 1 (НУ)
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(28)]
		public object СубконтоНУ2 {get;set;}//Субконто 2 (НУ)
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(29)]
		public object СубконтоНУ3 {get;set;}//Субконто 3 (НУ)
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(30)]
		public bool УчитыватьНДС {get;set;}//Учитывать НДС
		[DataMember]
		[ProtoMember(31)]
		public V82.Перечисления/*Ссылка*/.ВидыОперацийОприходованиеТоваров ВидОперации {get;set;}//Вид операции
		public void Записать()
		{
			//Установка блокировки элемента на горизантально масштабированный кластер.
			//Опционально введение тайм аута на запись одного и того же объекта, не чаще раза в 5-секунд. Защита от спама. упращение алгоритма блокировки.
			//Выделение сервиса для блокировки элемента и генерации кода
			//Выполнение операций контроля без обращений к sql-серверу.
			//Контроль конфликта блокировок.
			//Контроль загрузки булкинсертом гетерогенной коллекции.
			//Контроль уникальности кода для Документов.
			//Контроль уникальности номера для документов, в границах префикса.
			//Контроль владельца, он не может быть группой.
			//Контроль владельца он должен быть задан.
			//Контроль родителя он должен быть группой.
			//Контроль количества уровней, должен соотвествовать метаданным.
			//Контроль версии, объект не должен был быть записан перед чтением текущей записи, алгоритм версионника.
			//Контроль уникальности ссылки
			//Контроль зацикливания
			//Опционально контроль битых ссылок.
			//Соблюдейние транзакционности. ПередЗаписью. Открытие транзации. Валидации. ПриЗаписи. Фиксация транзакции. Информирование о записи элемента.
			using (var Подключение = new SqlConnection(СтрокаСоединения))
			{
				Подключение.Open();
				using (var Команда = Подключение.CreateCommand())
				{
					if(_ЭтоНовый)
					{
						Команда.CommandText = @"
						Insert Into _Document463(
						_IDRRef
						/*,_Version*/
						,_Marked
						,_IsMetadata
						,_Number
						,_Fld10881RRef
						,_Fld10882RRef
						,_Fld10883RRef
						,_Fld10884
						,_Fld10885
						,_Fld10886
						,_Fld10887RRef
						,_Fld10888
						,_Fld10889
						,_Fld10890
						,_Fld10891RRef
						,_Fld10892RRef
						,_Fld10893
						,_Fld10894RRef
						,_Fld10895RRef
						,_Fld10896RRef
						,_Fld10897RRef
						,_Fld10898RRef
						,_Fld10899RRef
						,_Fld10900RRef
						,_Fld10901RRef
						,_Fld10902
						,_Fld10903RRef)
						Values(
						@Ссылка
						/*,@Версия*/
						,@ПометкаУдаления
						,@Номер
						,@Организация
						,@Подразделение
						,@Склад
						,@ОтражатьВУправленческомУчете
						,@ОтражатьВБухгалтерскомУчете
						,@ОтражатьВНалоговомУчете
						,@ТипЦен
						,@СуммаДокумента
						,@Основание
						,@Комментарий
						,@ИнвентаризацияТоваровНаСкладе
						,@Ответственный
						,@СуммаДокументаРегл
						,@КоррСчет
						,@Субконто1
						,@Субконто2
						,@Субконто3
						,@КоррСчетНУ
						,@СубконтоНУ1
						,@СубконтоНУ2
						,@СубконтоНУ3
						,@УчитыватьНДС
						,@ВидОперации)";
					}
					else
					{
						Команда.CommandText = @"
						Update _Document463
						Set
						/*_IDRRef	= @Ссылка*/
						/*,_Version	= @Версия*/
						_Marked	= @ПометкаУдаления
						,_Number	= @Номер
						,_Fld10881RRef	= @Организация
						,_Fld10882RRef	= @Подразделение
						,_Fld10883RRef	= @Склад
						,_Fld10884	= @ОтражатьВУправленческомУчете
						,_Fld10885	= @ОтражатьВБухгалтерскомУчете
						,_Fld10886	= @ОтражатьВНалоговомУчете
						,_Fld10887RRef	= @ТипЦен
						,_Fld10888	= @СуммаДокумента
						,_Fld10889	= @Основание
						,_Fld10890	= @Комментарий
						,_Fld10891RRef	= @ИнвентаризацияТоваровНаСкладе
						,_Fld10892RRef	= @Ответственный
						,_Fld10893	= @СуммаДокументаРегл
						,_Fld10894RRef	= @КоррСчет
						,_Fld10895RRef	= @Субконто1
						,_Fld10896RRef	= @Субконто2
						,_Fld10897RRef	= @Субконто3
						,_Fld10898RRef	= @КоррСчетНУ
						,_Fld10899RRef	= @СубконтоНУ1
						,_Fld10900RRef	= @СубконтоНУ2
						,_Fld10901RRef	= @СубконтоНУ3
						,_Fld10902	= @УчитыватьНДС
						,_Fld10903RRef	= @ВидОперации
						Where _IDRRef = @Ссылка";
					}
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					/*Команда.Parameters.AddWithValue("Версия", Версия);*/
					Команда.Parameters.AddWithValue("ПометкаУдаления", ПометкаУдаления);
					Команда.Parameters.AddWithValue("Номер", Номер);
					Команда.Parameters.AddWithValue("ОтражатьВУправленческомУчете", ОтражатьВУправленческомУчете);
					Команда.Parameters.AddWithValue("ОтражатьВБухгалтерскомУчете", ОтражатьВБухгалтерскомУчете);
					Команда.Parameters.AddWithValue("ОтражатьВНалоговомУчете", ОтражатьВНалоговомУчете);
					Команда.Parameters.AddWithValue("СуммаДокумента", СуммаДокумента);
					Команда.Parameters.AddWithValue("Основание", Основание);
					Команда.Parameters.AddWithValue("Комментарий", Комментарий);
					Команда.Parameters.AddWithValue("ИнвентаризацияТоваровНаСкладе", ИнвентаризацияТоваровНаСкладе.Ссылка);
					Команда.Parameters.AddWithValue("СуммаДокументаРегл", СуммаДокументаРегл);
					Команда.Parameters.AddWithValue("КоррСчет", Guid.Empty);
					Команда.Parameters.AddWithValue("Субконто1", Guid.Empty);
					Команда.Parameters.AddWithValue("Субконто2", Guid.Empty);
					Команда.Parameters.AddWithValue("Субконто3", Guid.Empty);
					Команда.Parameters.AddWithValue("КоррСчетНУ", Guid.Empty);
					Команда.Parameters.AddWithValue("СубконтоНУ1", Guid.Empty);
					Команда.Parameters.AddWithValue("СубконтоНУ2", Guid.Empty);
					Команда.Parameters.AddWithValue("СубконтоНУ3", Guid.Empty);
					Команда.Parameters.AddWithValue("УчитыватьНДС", УчитыватьНДС);
					Команда.Parameters.AddWithValue("ВидОперации", ВидОперации.Ключ());
					Команда.ExecuteNonQuery();
				}
			}
		}
		public void Удалить()
		{
			using (var Подключение = new SqlConnection(СтрокаСоединения))
			{
				Подключение.Open();
				using (var Команда = Подключение.CreateCommand())
				{
					Команда.CommandText = @"Delete _Document463
					Where _IDRRef=@Ссылка";
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					Команда.ExecuteNonQuery();
				}
			}
		}
	}
}