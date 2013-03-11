Ext.define('Справочники.Резервы.ФормаНастройкиРезервовЗК',
	{
	extend: 'Ext.window.Window',
	height: 249,width: 483,
	iconCls: 'bogus',
	title: 'Форма',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:224px;width:483px;height:25px;',
			items:
			[
				{
					text:'ОсновныеДействияФормыОК',
				},
				{
					text:'Закрыть',
				},
				{
					text:'Разделитель',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:31px;width:467px;height:185px;',
			height: 185,width: 467,
			items:
			[
				{
					title:'БазовыеНачисления',
				},
				{
					title:'РазмерыОтчислений',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:91px;top:7px;width:384px;height:19px;',
		},
	]
});