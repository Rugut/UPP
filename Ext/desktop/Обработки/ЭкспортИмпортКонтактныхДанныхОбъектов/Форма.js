Ext.define('Обработки.ЭкспортИмпортКонтактныхДанныхОбъектов.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:459px;height:181px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Экспорт/Импорт контактных данных объектов',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:459px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:156px;width:459px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Выполнить',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПутьКФайлу',
			style: 'position:absolute;left:182px;top:57px;width:269px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:182px;top:81px;width:181px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:182px;top:105px;width:181px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:182px;top:129px;width:181px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНаименованиеПрограммы',
			text: 'Программа Экспорта/Импорта:',
			style: 'position:absolute;left:8px;top:81px;width:172px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВидОперации',
			text: 'Вид операции:',
			style: 'position:absolute;left:8px;top:105px;width:172px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьТипОбъекта',
			text: 'Тип объекта Экспорта/Импорта:',
			style: 'position:absolute;left:8px;top:129px;width:172px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПутьКФайлу',
			text: 'Файл Экспорта/Импорта:',
			style: 'position:absolute;left:8px;top:57px;width:172px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:182px;top:33px;width:269px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьФорматФайла',
			text: 'Формат файла:',
			style: 'position:absolute;left:8px;top:33px;width:172px;height:19px;',
		},
	],
	dockedItems:
	[
	]
});