Ext.define('Отчеты.РегламентированныйОтчетВода.ФормаВводаЛицензии',
	{
	extend: 'Ext.window.Window',
	height: 160,width: 212,
	iconCls: 'bogus',
	title: 'Лицензия на водопользование',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:212px;height:25px;',
			items:
			[
				{
					text:'Очистить',
				},
				{
					text:'Подменю',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:135px;width:212px;height:25px;',
			items:
			[
				{
					text:'ОсновныеДействияФормыСформировать',
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
			name: 'ПолеВводаСерия',
			style: 'position:absolute;left:99px;top:33px;width:105px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаНомер',
			style: 'position:absolute;left:99px;top:57px;width:105px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаВид',
			style: 'position:absolute;left:99px;top:81px;width:105px;height:19px;',
		},
	]
});