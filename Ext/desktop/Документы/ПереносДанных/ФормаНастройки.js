Ext.define('Документы.ПереносДанных.ФормаНастройки',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:365px;height:365px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Настройка состава регистров',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:340px;width:365px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'',
				},
				'-',
				{
					text:'Отмена',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:8px;width:349px;height:324px;',
			height: 324,width: 349,
			items:
			[
				{
					title:'Сведений',
					items:
					[
		{
			xtype: 'itemselector',
			style: 'position:absolute;left:6px;top:30px;width:335px;height:268px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:335px;height:24px;',
			items:
			[
				{
					text:'Отметить все регистры',
				},
				{
					text:'Снять отметку со всех регистров',
				},
				{
					text:'Инвертировать отметки',
				},
			]
		},
					]
				},
				{
					title:'Накопления',
					items:
					[
		{
			xtype: 'itemselector',
			style: 'position:absolute;left:6px;top:30px;width:335px;height:268px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:335px;height:24px;',
			items:
			[
				{
					text:'Отметить все регистры',
				},
				{
					text:'Снять отметку со всех регистров',
				},
				{
					text:'Инвертировать отметки',
				},
			]
		},
					]
				},
				{
					title:'Расчета',
					items:
					[
		{
			xtype: 'itemselector',
			style: 'position:absolute;left:6px;top:30px;width:335px;height:268px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:335px;height:24px;',
			items:
			[
				{
					text:'Отметить все регистры',
				},
				{
					text:'Снять отметку со всех регистров',
				},
				{
					text:'Инвертировать отметки',
				},
			]
		},
					]
				},
			]
		},
	]
});