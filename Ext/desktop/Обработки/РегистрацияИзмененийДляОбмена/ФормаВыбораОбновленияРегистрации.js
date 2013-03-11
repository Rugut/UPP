Ext.define('Обработки.РегистрацияИзмененийДляОбмена.ФормаВыбораОбновленияРегистрации',
	{
	extend: 'Ext.window.Window',
	height: 172,width: 464,
	iconCls: 'bogus',
	title: 'Регистрация изменений',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:147px;width:464px;height:25px;',
			items:
			[
				{
					text:'ОК',
				},
				{
					text:'Отмена',
				},
			]
		},
	]
});