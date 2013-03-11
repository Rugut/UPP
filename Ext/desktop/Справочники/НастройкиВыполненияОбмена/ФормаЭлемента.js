Ext.define('Справочники.НастройкиВыполненияОбмена.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 580,width: 508,
	iconCls: 'bogus',
	title: 'Настройки выполнения обмена',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:508px;height:25px;',
			items:
			[
				{
					text:'ПроизвестиОбменДанными',
				},
				{
					text:'Разделитель3',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:555px;width:508px;height:25px;',
			items:
			[
				{
					text:'ОсновныеДействияФормыОК',
				},
				{
					text:'ОсновныеДействияФормыЗакрыть',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ОсновныеДействияФормыСохранить',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:446px;top:33px;width:54px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:90px;top:33px;width:319px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:57px;width:492px;height:260px;',
			height: 260,width: 492,
			items:
			[
				{
					title:'ОбменПоРасписанию',
				},
				{
					title:'ОбменПоСобытиям',
				},
				{
					title:'Дополнительно',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:368px;width:492px;height:155px;',
			height: 155,width: 492,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'НастройкаОбмена',
				},
				{
					text:'ВыполняемоеДействие',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:340px;width:492px;height:24px;',
			items:
			[
				{
					text:'Действие7',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие6',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие1',
				},
				{
					text:'Подбор',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие5',
				},
				{
					text:'УстановитьДействие',
				},
				{
					text:'Действие3',
				},
				{
					text:'СкопироватьГруппу',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие8',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:102px;top:528px;width:398px;height:19px;',
		},
	]
});