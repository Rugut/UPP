Ext.define('Справочники.СохраненныеНастройки.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:551px;height:327px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Выбор настройки',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:60px;width:535px;height:259px;',
			height: 259,width: 535,
			columns:
			[
				{
					text:'Наименование',
					width:'217',
				},
				{
					text:'Тип настройки',
					width:'140',
				},
				{
					text:'Настраиваемый объект',
					width:'143',
				},
				{
					text:'Описание',
					width:'206',
				},
				{
					text:'Пользователи',
					width:'364',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:551px;height:25px;',
			items:
			[
				{
					text:'Выбрать',
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
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:29px;width:535px;height:27px;',
			height: 27,width: 535,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьНаименование',
			text: 'Наименование:',
			style: 'position:absolute;left:0px;top:4px;width:84px;height:18px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:86px;top:4px;width:449px;height:19px;',
		},
					]
				},
			]
		},
	]
});