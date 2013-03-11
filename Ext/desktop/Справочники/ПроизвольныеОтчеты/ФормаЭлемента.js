Ext.define('Справочники.ПроизвольныеОтчеты.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 323,width: 445,
	iconCls: 'bogus',
	title: 'Общая настройка отчета',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:96px;top:33px;width:341px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:298px;width:445px;height:25px;',
			items:
			[
				{
					text:'Разделитель1',
				},
				{
					text:'ДействиеЗаписать',
				},
				{
					text:'ДействиеОК',
				},
				{
					text:'ОсновныеДействияФормыЗакрыть',
				},
				{
					text:'Разделитель',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Описание',
			style: 'position:absolute;left:8px;top:251px;width:429px;height:39px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:135px;width:429px;height:92px;',
			height: 92,width: 429,
			columns:
			[
				{
					text:'ИмяИсточника',
				},
				{
					text:'НаборДанных',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:445px;height:25px;',
			items:
			[
				{
					text:'СхемаКомпоновки',
				},
				{
					text:'ДействиеПоказательМонитораЭффективности',
				},
				{
					text:'ПодменюМастеровНастройки',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ДействиеСправка',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Родитель',
			style: 'position:absolute;left:96px;top:58px;width:341px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:111px;width:429px;height:24px;',
			items:
			[
			]
		},
	]
});