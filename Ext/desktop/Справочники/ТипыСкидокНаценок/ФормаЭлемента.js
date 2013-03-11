Ext.define('Справочники.ТипыСкидокНаценок.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 320,width: 483,
	iconCls: 'bogus',
	title: 'Типы скидок и наценок',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:483px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:295px;width:483px;height:25px;',
			items:
			[
				{
					text:'Действие1',
				},
				{
					text:'Действие2',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель1',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:61px;width:467px;height:226px;',
			height: 226,width: 467,
			items:
			[
				{
					title:'ПараметрыСкидки',
				},
				{
					title:'ВремяДействия',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:435px;top:33px;width:40px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:93px;top:33px;width:307px;height:19px;',
		},
	]
});