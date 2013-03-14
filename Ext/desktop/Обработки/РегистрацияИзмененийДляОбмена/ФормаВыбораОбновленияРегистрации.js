Ext.define('Обработки.РегистрацияИзмененийДляОбмена.ФормаВыбораОбновленияРегистрации',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:464px;height:172px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
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
		{
			xtype: 'label',
			name: 'ТекстВопроса',
			text: 'Текст вопроса',
			style: 'position:absolute;left:8px;top:8px;width:448px;height:70px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Только для элементов, для которых включена авторегистрация изменений',
			style: 'position:absolute;left:8px;top:102px;width:448px;height:16px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Для всех элементов',
			style: 'position:absolute;left:8px;top:123px;width:448px;height:16px;',
		},
	]
});