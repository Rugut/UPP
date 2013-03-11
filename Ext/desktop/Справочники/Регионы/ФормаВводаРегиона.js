Ext.define('Справочники.Регионы.ФормаВводаРегиона',
	{
	extend: 'Ext.window.Window',
	height: 272,width: 336,
	iconCls: 'bogus',
	title: 'Ввод региона',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:336px;height:25px;',
			items:
			[
				{
					text:'ДействияФормыЗагрузитьАК',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:247px;width:336px;height:25px;',
			items:
			[
				{
					text:'ОК',
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
			xtype: 'textfield',
			hideLabel: true,
			name: 'Регион',
			style: 'position:absolute;left:102px;top:79px;width:226px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Район',
			style: 'position:absolute;left:102px;top:103px;width:226px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Город',
			style: 'position:absolute;left:102px;top:127px;width:226px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НаселенныйПункт',
			style: 'position:absolute;left:102px;top:151px;width:226px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Представление',
			style: 'position:absolute;left:102px;top:179px;width:226px;height:60px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Страна',
			style: 'position:absolute;left:102px;top:33px;width:226px;height:19px;',
		},
	]
});