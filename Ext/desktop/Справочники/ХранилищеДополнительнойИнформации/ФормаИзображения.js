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
			style: 'position:absolute;left:8px;top:58px;width:134px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:142px;top:58px;width:250px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОбъекта',
			text: '',
			style: 'position:absolute;left:8px;top:33px;width:134px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:400px;height:25px;',
			items:
			[
				'-',
				'-',
				{
					text:'Перечитать',
				},
				{
					text:'Изменить изображение',
				},
				'-',
				{
					text:'Перечитать',
				},
				{
					text:'Сохранить',
				},
				{
					text:'Записать',
				},
				'-',
				'-',
				{
					text:'Сохранить изображение на диск',
				},
				{
					text:'Справка',
				},
				{
					text:'Записать и закрыть',
				},
				{
					text:'Изменить',
				},
				{
					text:'Закрыть',
				},
				'-',
				'-',
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:361px;width:400px;height:25px;',
			items:
			[
				{
					text:'OK',
				},
				{
					text:'Записать',
				},
				'-',
				'-',
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Объект',
			style: 'position:absolute;left:142px;top:33px;width:250px;height:19px;',
		},
	]
});