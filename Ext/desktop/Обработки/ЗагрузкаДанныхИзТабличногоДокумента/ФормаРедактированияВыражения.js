Ext.define('Обработки.ЗагрузкаДанныхИзТабличногоДокумента.ФормаРедактированияВыражения',
	{
	extend: 'Ext.window.Window',
	height: 292,width: 718,
	iconCls: 'bogus',
	title: 'Форма редактирования выражения',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:267px;width:718px;height:25px;',
			items:
			[
				{
					text:'ОК',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Отмена',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НадписьТекстВыражения',
			style: 'position:absolute;left:8px;top:8px;width:702px;height:105px;',
		},
	]
});