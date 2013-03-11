Ext.define('Документы.ПоступлениеТоваровУслуг.ФормаОтбораЗаказов',
	{
	extend: 'Ext.window.Window',
	height: 518,width: 783,
	iconCls: 'bogus',
	title: 'Отобрать заказы покупателей',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:493px;width:781px;height:25px;',
			items:
			[
				{
					text:'Закрыть',
				},
				{
					text:'ДействиеДалее',
				},
				{
					text:'Разделитель',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:41px;width:767px;height:167px;',
			height: 167,width: 767,
			items:
			[
				{
					title:'СтраницаНастройки',
				},
				{
					title:'СтраницаДополнительно',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНач',
			style: 'position:absolute;left:84px;top:17px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаКон',
			style: 'position:absolute;left:188px;top:17px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериода',
			text: '...',
			style: 'position:absolute;left:276px;top:17px;width:19px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:227px;width:644px;height:25px;',
			items:
			[
				{
					text:'ДействиеВключитьВсе',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'ДействиеВыключитьВсе',
				},
				{
					text:'Действие3',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'ДействиеИнвертировать',
				},
				{
					text:'ДействиеЗаполнить',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие1',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ДействиеАнализ',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие6',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:250px;width:767px;height:234px;',
			height: 234,width: 767,
			columns:
			[
				{
					text:'НеЗаполнять',
				},
				{
					text:'Переносить',
				},
				{
					text:'Ссылка',
				},
				{
					text:'Дата',
				},
				{
					text:'Номер',
				},
				{
					text:'ВидОперации',
				},
				{
					text:'Контрагент',
				},
				{
					text:'ДоговорКонтрагента',
				},
				{
					text:'КонтактноеЛицоКонтрагента',
				},
				{
					text:'СуммаДокумента',
				},
				{
					text:'ВалютаДокумента',
				},
				{
					text:'ЗаказыОстаток',
				},
				{
					text:'ЗаказыКоличество',
				},
				{
					text:'ТараКоличество',
				},
				{
					text:'РасчетыОстаток',
				},
				{
					text:'РазмещенияКоличество',
				},
				{
					text:'ТипЦен',
				},
				{
					text:'ТипСкидкиНаценки',
				},
				{
					text:'ДатаОплаты',
				},
				{
					text:'ДатаПоступления',
				},
				{
					text:'Организация',
				},
				{
					text:'Склад',
				},
				{
					text:'Подразделение',
				},
				{
					text:'Ответственный',
				},
				{
					text:'Проведен',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:493px;width:783px;height:25px;',
			items:
			[
				{
					text:'ДействиеНазад',
				},
				{
					text:'ДействиеПеренести',
				},
				{
					text:'Закрыть',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Разделитель',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:92px;width:767px;height:391px;',
			height: 391,width: 767,
			items:
			[
				{
					title:'Товары',
				},
				{
					title:'Тара',
				},
				{
					title:'Услуги',
				},
				{
					title:'Оборудование',
				},
			]
		},
	]
});