Ext.define('Обработки.ЗагрузкаДанныхИзТабличногоДокумента.ФормаРедактированияВыражения',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:718px;height:292px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
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
				'-',
				{
					text:'Отмена',
				},
			]
		},
		{
			xtype: 'textarea',
			hideLabel: true,
			name: 'НадписьТекстВыражения',
			style: 'position:absolute;left:8px;top:8px;width:702px;height:105px;',
		},
	]
});