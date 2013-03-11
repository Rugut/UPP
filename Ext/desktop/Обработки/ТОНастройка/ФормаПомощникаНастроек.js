Ext.define('Обработки.ТОНастройка.ФормаПомощникаНастроек',
	{
	extend: 'Ext.window.Window',
	height: 393,width: 653,
	iconCls: 'bogus',
	title: 'Помощник подключения и настройки торгового оборудования',
	
	items:
	[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:8px;width:637px;height:352px;',
			height: 352,width: 637,
			items:
			[
				{
					title:'Приветствие',
					items:
					[
					]
				},
				{
					title:'ВыборВидаТО',
					items:
					[
					]
				},
				{
					title:'ВыборДрайвера',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:183px;top:114px;width:443px;height:130px;',
			height: 130,width: 443,
			columns:
			[
				{
					text:'Наименование',
				},
			]
		},
					]
				},
				{
					title:'ДобавлениеОбработкиОбслуживания',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Каталог',
			style: 'position:absolute;left:256px;top:41px;width:370px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:166px;top:95px;width:460px;height:114px;',
			height: 114,width: 460,
			columns:
			[
				{
					text:'Наименование',
				},
				{
					text:'Версия',
				},
			]
		},
		{
			xtype: 'button',
			name: 'ПолучитьСписок',
			text: 'Получить список',
			style: 'position:absolute;left:530px;top:65px;width:96px;height:25px;',
		},
					]
				},
				{
					title:'ВыборУстройства',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:183px;top:88px;width:443px;height:166px;',
			height: 166,width: 443,
			columns:
			[
				{
					text:'Наименование',
				},
				{
					text:'Модель',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КассаККМ',
			style: 'position:absolute;left:232px;top:259px;width:394px;height:19px;',
		},
					]
				},
				{
					title:'ДобавлениеНовогоУстройства',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:166px;top:41px;width:460px;height:255px;',
			height: 255,width: 460,
			columns:
			[
				{
					text:'Модель',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:251px;top:302px;width:375px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КассаККМДобавлениеНовогоУстройства',
			style: 'position:absolute;left:251px;top:326px;width:375px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:367px;width:653px;height:25px;',
			items:
			[
				{
					text:'Далее',
				},
				{
					text:'Отменить',
				},
				{
					text:'Назад',
				},
				{
					text:'Разделитель',
				},
			]
		},
	]
});