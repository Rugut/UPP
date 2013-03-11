Ext.define('Документы.РегистрацияРазовыхУдержанийРаботниковОрганизаций.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 453,width: 659,
	iconCls: 'bogus',
	title: 'Регистрация разовых удержаний из зарплаты сотрудников организации',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:431px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:531px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПериодРегистрации',
			style: 'position:absolute;left:113px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:113px;top:33px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:86px;top:401px;width:565px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:431px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:659px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'Действие7',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Действие3',
				},
				{
					text:'ПодменюЗаполнить',
				},
				{
					text:'ДействиеОткрытьСвойства',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'Подменю1',
				},
				{
					text:'Действие4',
				},
				{
					text:'Подменю2',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие5',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие6',
				},
				{
					text:'Разделитель6',
				},
				{
					text:'ВвестиПоказателиДляРасчета',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'Действие1',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'СписокРаботников',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель7',
				},
				{
					text:'Действие2',
				},
				{
					text:'РедактироватьКодНомер',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие6',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Рассчитать',
				},
				{
					text:'Подменю1',
				},
				{
					text:'Подменю',
				},
				{
					text:'Действие4',
				},
				{
					text:'ДействиеОткрытьКатегории',
				},
				{
					text:'Действие2',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Действие5',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:428px;width:659px;height:25px;',
			items:
			[
				{
					text:'Действие1',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:125px;width:643px;height:233px;',
			height: 233,width: 643,
			columns:
			[
				{
					text:'Картинка',
				},
				{
					text:'Авторасчет',
				},
				{
					text:'НомерСтроки',
				},
				{
					text:'Физлицо',
				},
				{
					text:'ВидРасчета',
				},
				{
					text:'ДатаНачала',
				},
				{
					text:'ДатаОкончания',
				},
				{
					text:'Показатели',
				},
				{
					text:'НаименованиеПоказатель1',
				},
				{
					text:'Показатель1',
				},
				{
					text:'НаименованиеПоказатель2',
				},
				{
					text:'Показатель2',
				},
				{
					text:'НаименованиеПоказатель3',
				},
				{
					text:'Показатель3',
				},
				{
					text:'НаименованиеПоказатель4',
				},
				{
					text:'Показатель4',
				},
				{
					text:'НаименованиеПоказатель5',
				},
				{
					text:'Показатель5',
				},
				{
					text:'НаименованиеПоказатель6',
				},
				{
					text:'Показатель6',
				},
				{
					text:'Результат',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:100px;width:643px;height:24px;',
			items:
			[
				{
					text:'Разделитель2',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие8',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие6',
				},
				{
					text:'Подбор',
				},
				{
					text:'Разделитель',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:428px;width:246px;height:25px;',
			items:
			[
				{
					text:'ТекущийСотрудник',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Исправить',
				},
				{
					text:'СписокСотрудников',
				},
				{
					text:'ОтменитьИсправление',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ВесьДокумент',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:439px;top:362px;width:83px;height:33px;',
			height: 33,width: 83,
			items:
			[
				{
					title:'Страница1',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:522px;top:362px;width:129px;height:33px;',
			height: 33,width: 129,
			items:
			[
				{
					title:'Страница1',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:287px;width:643px;height:24px;',
			items:
			[
				{
					text:'Действие4',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие12',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие10',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие9',
				},
				{
					text:'Действие14',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие6',
				},
				{
					text:'Подменю',
				},
				{
					text:'Действие13',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие5',
				},
			]
		},
	]
});