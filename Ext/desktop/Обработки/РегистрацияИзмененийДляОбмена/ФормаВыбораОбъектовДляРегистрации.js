Ext.define('Обработки.РегистрацияИзмененийДляОбмена.ФормаВыбораОбъектовДляРегистрации',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:413px;height:81px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Обработка  Регистрация изменений для обмена',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:56px;width:413px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
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
			xtype: 'label',
			name: 'НадписьСписокОбъектовДляРегистрации',
			text: 'Список объектов для регистрации:',
			style: 'position:absolute;left:8px;top:6px;width:182px;height:19px;',
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