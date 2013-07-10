
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
	public partial class ТребованиеНакладная:ДокументОбъект
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
		public bool ОтражатьВУправленческомУчете {get;set;}//Отражать в управленческом учете
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(10)]
		public bool ОтражатьВБухгалтерскомУчете {get;set;}//Отражать в бухгалтерском учете
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(11)]
		public bool ОтражатьВНалоговомУчете {get;set;}//Отражать в налоговом учете
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(12)]
		public V82.СправочникиСсылка.Организации Организация {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(13)]
		public V82.СправочникиСсылка.Склады Склад {get;set;}
		///<summary>
		///(Упр)
		///</summary>
		[DataMember]
		[ProtoMember(14)]
		public V82.СправочникиСсылка.Подразделения Подразделение {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(15)]
		public V82.СправочникиСсылка.Пользователи Ответственный {get;set;}
		///<summary>
		///(Общ) Любая дополнительная информация
		///</summary>
		[DataMember]
		[ProtoMember(16)]
		public string/*(0)*/ Комментарий {get;set;}
		///<summary>
		///Необходимые действия по включению или исключению НДС в стоимости товаров при перемещении
		///</summary>
		[DataMember]
		[ProtoMember(17)]
		public V82.Перечисления/*Ссылка*/.ДействиеНДСВСтоимостиТоваров НДСвСтоимостиТоваров {get;set;}//НДС в стоимости материалов
		///<summary>
		///Акт отбора проб, на основании которого введена требование-накладная
		///</summary>
		[DataMember]
		[ProtoMember(18)]
		public object ДокументОснование {get;set;}//Документ-основание
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(19)]
		public object СчетСписанияНДС {get;set;}//Счет списания НДС
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(20)]
		public object СубконтоСписанияНДС1 {get;set;}//Субконто 1
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(21)]
		public object СубконтоСписанияНДС2 {get;set;}//Субконто 2
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(22)]
		public object СубконтоСписанияНДС3 {get;set;}//Субконто 3
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(23)]
		public object СчетСписанияНДСНУ {get;set;}//Счет списания НДС (НУ)
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(24)]
		public object СубконтоСписанияНДСНУ1 {get;set;}//Субконто 1 (налоговый учет)
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(25)]
		public object СубконтоСписанияНДСНУ2 {get;set;}//Субконто 2 (налоговый учет)
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(26)]
		public object СубконтоСписанияНДСНУ3 {get;set;}//Субконто 3 (налоговый учет)
		[DataMember]
		[ProtoMember(27)]
		public bool ДляСписанияНДСиспользоватьСчетИАналитикуУчетаЗатрат {get;set;}//Для списания НДС использовать счет и аналитику учета затрат
		///<summary>
		///Для НДС
		///</summary>
		[DataMember]
		[ProtoMember(28)]
		public V82.СправочникиСсылка.НоменклатурныеГруппы НоменклатурнаяГруппа {get;set;}//Номенклатурная группа
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(29)]
		public V82.СправочникиСсылка.СтатьиЗатрат СтатьяЗатратСписанияНДС {get;set;}//Статья затрат списания НДС
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(30)]
		public V82.СправочникиСсылка.ПодразделенияОрганизаций ПодразделениеОрганизации {get;set;}//Подразделение организации
		[DataMember]
		[ProtoMember(31)]
		public bool РазрешитьПревышениеЛимита {get;set;}//Разрешить превышение лимита
		[DataMember]
		[ProtoMember(32)]
		public object Проект {get;set;}
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
						Insert Into _Document467(
						_IDRRef
						/*,_Version*/
						,_Marked
						,_IsMetadata
						,_Number
						,_Fld11982
						,_Fld11983
						,_Fld11984
						,_Fld11985RRef
						,_Fld11986RRef
						,_Fld11987RRef
						,_Fld11988RRef
						,_Fld11989
						,_Fld11992RRef
						,_Fld11993RRef
						,_Fld11994RRef
						,_Fld11995RRef
						,_Fld11996RRef
						,_Fld11997RRef
						,_Fld11998RRef
						,_Fld11999RRef
						,_Fld12000RRef
						,_Fld12003
						,_Fld12001RRef
						,_Fld12002RRef
						,_Fld11990RRef
						,_Fld12004)
						Values(
						@Ссылка
						/*,@Версия*/
						,@ПометкаУдаления
						,@Номер
						,@ОтражатьВУправленческомУчете
						,@ОтражатьВБухгалтерскомУчете
						,@ОтражатьВНалоговомУчете
						,@Организация
						,@Склад
						,@Подразделение
						,@Ответственный
						,@Комментарий
						,@НДСвСтоимостиТоваров
						,@СчетСписанияНДС
						,@СубконтоСписанияНДС1
						,@СубконтоСписанияНДС2
						,@СубконтоСписанияНДС3
						,@СчетСписанияНДСНУ
						,@СубконтоСписанияНДСНУ1
						,@СубконтоСписанияНДСНУ2
						,@СубконтоСписанияНДСНУ3
						,@ДляСписанияНДСиспользоватьСчетИАналитикуУчетаЗатрат
						,@НоменклатурнаяГруппа
						,@СтатьяЗатратСписанияНДС
						,@ПодразделениеОрганизации
						,@РазрешитьПревышениеЛимита)";
					}
					else
					{
						Команда.CommandText = @"
						Update _Document467
						Set
						/*_IDRRef	= @Ссылка*/
						/*,_Version	= @Версия*/
						_Marked	= @ПометкаУдаления
						,_Number	= @Номер
						,_Fld11982	= @ОтражатьВУправленческомУчете
						,_Fld11983	= @ОтражатьВБухгалтерскомУчете
						,_Fld11984	= @ОтражатьВНалоговомУчете
						,_Fld11985RRef	= @Организация
						,_Fld11986RRef	= @Склад
						,_Fld11987RRef	= @Подразделение
						,_Fld11988RRef	= @Ответственный
						,_Fld11989	= @Комментарий
						,_Fld11992RRef	= @НДСвСтоимостиТоваров
						,_Fld11993RRef	= @СчетСписанияНДС
						,_Fld11994RRef	= @СубконтоСписанияНДС1
						,_Fld11995RRef	= @СубконтоСписанияНДС2
						,_Fld11996RRef	= @СубконтоСписанияНДС3
						,_Fld11997RRef	= @СчетСписанияНДСНУ
						,_Fld11998RRef	= @СубконтоСписанияНДСНУ1
						,_Fld11999RRef	= @СубконтоСписанияНДСНУ2
						,_Fld12000RRef	= @СубконтоСписанияНДСНУ3
						,_Fld12003	= @ДляСписанияНДСиспользоватьСчетИАналитикуУчетаЗатрат
						,_Fld12001RRef	= @НоменклатурнаяГруппа
						,_Fld12002RRef	= @СтатьяЗатратСписанияНДС
						,_Fld11990RRef	= @ПодразделениеОрганизации
						,_Fld12004	= @РазрешитьПревышениеЛимита
						Where _IDRRef = @Ссылка";
					}
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					/*Команда.Parameters.AddWithValue("Версия", Версия);*/
					Команда.Parameters.AddWithValue("ПометкаУдаления", ПометкаУдаления);
					Команда.Parameters.AddWithValue("Номер", Номер);
					Команда.Parameters.AddWithValue("ОтражатьВУправленческомУчете", ОтражатьВУправленческомУчете);
					Команда.Parameters.AddWithValue("ОтражатьВБухгалтерскомУчете", ОтражатьВБухгалтерскомУчете);
					Команда.Parameters.AddWithValue("ОтражатьВНалоговомУчете", ОтражатьВНалоговомУчете);
					Команда.Parameters.AddWithValue("Комментарий", Комментарий);
					Команда.Parameters.AddWithValue("НДСвСтоимостиТоваров", НДСвСтоимостиТоваров.Ключ());
					Команда.Parameters.AddWithValue("СчетСписанияНДС", Guid.Empty);
					Команда.Parameters.AddWithValue("СубконтоСписанияНДС1", Guid.Empty);
					Команда.Parameters.AddWithValue("СубконтоСписанияНДС2", Guid.Empty);
					Команда.Parameters.AddWithValue("СубконтоСписанияНДС3", Guid.Empty);
					Команда.Parameters.AddWithValue("СчетСписанияНДСНУ", Guid.Empty);
					Команда.Parameters.AddWithValue("СубконтоСписанияНДСНУ1", Guid.Empty);
					Команда.Parameters.AddWithValue("СубконтоСписанияНДСНУ2", Guid.Empty);
					Команда.Parameters.AddWithValue("СубконтоСписанияНДСНУ3", Guid.Empty);
					Команда.Parameters.AddWithValue("ДляСписанияНДСиспользоватьСчетИАналитикуУчетаЗатрат", ДляСписанияНДСиспользоватьСчетИАналитикуУчетаЗатрат);
					Команда.Parameters.AddWithValue("РазрешитьПревышениеЛимита", РазрешитьПревышениеЛимита);
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
					Команда.CommandText = @"Delete _Document467
					Where _IDRRef=@Ссылка";
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					Команда.ExecuteNonQuery();
				}
			}
		}
	}
}