Ext.define('Обработки.АдминистрированиеПользователей.ФормаГруппыПользователей',
	{
	extend: 'Ext.window.Window',
	height: 386,width: 739,
	iconCls: 'bogus',
	title: 'Группы пользователей',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:32px;width:217px;height:322px;',
			height: 322,width: 217,
			columns:
			[
				{
					text:'Наименование',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:739px;height:25px;',
			items:
			[
				{
					text:'Разделитель2',
				},
				{
					text:'Действие5',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие16',
				},
				{
					text:'Разделитель6',
				},
				{
					text:'ДействиеРедактироватьПрава',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'ДействиеСправка',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие12',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Подменю',
				},
				{
					text:'Действие13',
				},
				{
					text:'Действие14',
				},
				{
					text:'ДействиеОтображатьПодбор',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие10',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'Разделитель6',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие20',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Подменю1',
				},
				{
					text:'Действие12',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие11',
				},
				{
					text:'ДействиеДобавить',
				},
				{
					text:'Действие9',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие7',
				},
				{
					text:'Подменю',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие1',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Действие4',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:361px;width:739px;height:25px;',
			items:
			[
				{
					text:'ДействиеЗаписатьГруппуПользователяИЗакрыть',
				},
				{
					text:'ДействиеЗаписатьГруппуПользователя',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:462px;top:32px;width:269px;height:322px;',
			height: 322,width: 269,
			items:
			[
				{
					title:'Пользователи',
					items:
					[
		{
			xtype: 'button',
			name: 'КнопкаДобавитьПользователя',
			text: '<',
			style: 'position:absolute;left:6px;top:64px;width:24px;height:24px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаУдалитьПользователя',
			text: '>',
			style: 'position:absolute;left:6px;top:91px;width:24px;height:24px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:34px;top:0px;width:235px;height:322px;',
			height: 322,width: 235,
			columns:
			[
				{
					text:'Картинка',
				},
				{
					text:'Код',
				},
				{
					text:'Наименование',
				},
				{
					text:'ПрофильПолномочийПользователя',
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:231px;top:32px;width:225px;height:322px;',
			height: 322,width: 225,
			items:
			[
				{
					title:'СоставГруппы',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:0px;width:225px;height:322px;',
			height: 322,width: 225,
			columns:
			[
				{
					text:'Пользователь',
				},
			]
		},
					]
				},
			]
		},
	]
});