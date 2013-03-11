Ext.define('Справочники.ЗначенияСвойствОбъектов.ФормаГруппы',
	{
	extend: 'Ext.window.Window',
	height: 110,width: 400,
	iconCls: 'bogus',
	title: 'Группа Значения свойств объектов (Классификатор)',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:312px;top:58px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:93px;top:58px;width:178px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Владелец',
			style: 'position:absolute;left:93px;top:33px;width:299px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:400px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:85px;width:400px;height:25px;',
			items:
			[
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ОсновныеДействияФормыОК',
				},
				{
					text:'ОсновныеДействияФормыСохранить',
				},
				{
					text:'ОсновныеДействияФормыЗакрыть',
				},
			]
		},
	]
});