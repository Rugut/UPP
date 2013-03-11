Ext.define('Обработки.РегистрацияИзмененийДляОбмена.ФормаВыбораОбъектовДляРегистрации',
	{
	extend: 'Ext.window.Window',
	height: 81,width: 413,
	iconCls: 'bogus',
	title: 'Обработка  Регистрация изменений для обмена',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:56px;width:413px;height:25px;',
			items:
			[
				{
					text:'Отмена',
				},
				{
					text:'ОК',
				},
				{
					text:'Разделитель',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СписокРедактирования',
			style: 'position:absolute;left:196px;top:6px;width:209px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'ВыбратьИзЗапроса',
			text: 'Выбрать из запроса',
			style: 'position:absolute;left:195px;top:29px;width:210px;height:19px;',
		},
	]
});