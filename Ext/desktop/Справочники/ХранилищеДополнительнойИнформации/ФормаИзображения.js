Ext.define('Справочники.ХранилищеДополнительнойИнформации.ФормаИзображения',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:400px;height:386px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Форма данных об изображении',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьНаименования',
			text: 'Описание изображения:',
			style: 'position:absolute;left:8px;top:58px;width:134px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Наименование',
			width: 250,
			height: 19,
			style: 'position:absolute;left:142px;top:58px;width:250px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОбъекта',
			text: '',
			style: 'position:absolute;left:8px;top:33px;width:134px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Объект',
			width: 250,
			height: 19,
			style: 'position:absolute;left:142px;top:33px;width:250px;height:19px;',
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:400px;height:25px;',
			dock: 'top',
			items:
			[
				'-',
				{
					xtype: 'splitbutton',
					text:'Действия',
					menu: [
				{
					text:'Перечитать',
				},
				{
					text:'Записать',
				},
				{
					text:'Записать и закрыть',
				},
				'-',
				{
					text:'Изменить изображение',
				},
				{
					text:'Сохранить изображение на диск',
				},
				'-',
				{
					text:'Закрыть',
				},
					]
				},
				'-',
				{
					text:'Перечитать',
				},
				'-',
				{
					text:'Изменить',
				},
				'-',
				{
					text:'Сохранить',
				},
				'-',
				{
					text:'Справка',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:361px;width:400px;height:25px;',
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'OK',
				},
				'-',
				{
					text:'Записать',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
	]
});