Ext.define('Обработки.РедактированиеВычетовНаДетей2011.Форма',
	{
	extend: 'Ext.window.Window',
	height: 589,width: 996,
	iconCls: 'bogus',
	title: 'Стандартные вычеты - 2011',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:564px;width:996px;height:25px;',
			items:
			[
				{
					text:'ОсновныеДействияФормыЗакрыть',
				},
				{
					text:'Выполнить',
				},
				{
					text:'Разделитель',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:121px;width:206px;height:435px;',
			height: 435,width: 206,
			columns:
			[
				{
					text:'Наименование',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:226px;top:121px;width:762px;height:120px;',
			height: 120,width: 762,
			columns:
			[
				{
					text:'КолонкаПериод',
				},
				{
					text:'Период',
				},
				{
					text:'ПериодЗавершения',
				},
				{
					text:'ВычетыНаДетейТекст',
				},
				{
					text:'ВычетыНаДетейПрименение',
				},
				{
					text:'КодВычетаНаДетей',
				},
				{
					text:'КоличествоДетей',
				},
				{
					text:'Основание',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:84px;top:39px;width:220px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:226px;top:436px;width:762px;height:120px;',
			height: 120,width: 762,
			columns:
			[
				{
					text:'КолонкаПериод',
				},
				{
					text:'Период',
				},
				{
					text:'ПериодЗавершения',
				},
				{
					text:'ВычетыНаДетейТекст',
				},
				{
					text:'ВычетыНаДетейПрименение',
				},
				{
					text:'КодВычетаНаДетей',
				},
				{
					text:'КоличествоДетей',
				},
				{
					text:'Основание',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:226px;top:411px;width:762px;height:24px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие1',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:226px;top:246px;width:762px;height:140px;',
			height: 140,width: 762,
			items:
			[
				{
					title:'СтраницаПереключателей',
					items:
					[
		{
			xtype: 'button',
			name: 'КнопкаОбработать',
			text: 'Обработать вычеты сотрудника',
			style: 'position:absolute;left:0px;top:116px;width:186px;height:24px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:0px;width:254px;height:110px;',
			height: 110,width: 254,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:25px;width:254px;height:85px;',
			height: 85,width: 254,
			items:
			[
				{
					title:'СтраницаМногихДетей',
					items:
					[
					]
				},
				{
					title:'СтраницаОдногоРебенка',
					items:
					[
					]
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:254px;top:0px;width:254px;height:110px;',
			height: 110,width: 254,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:25px;width:254px;height:85px;',
			height: 85,width: 254,
			items:
			[
				{
					title:'СтраницаМногихДетей',
					items:
					[
					]
				},
				{
					title:'СтраницаОдногоРебенка',
					items:
					[
					]
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:508px;top:0px;width:254px;height:110px;',
			height: 110,width: 254,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:25px;width:254px;height:85px;',
			height: 85,width: 254,
			items:
			[
				{
					title:'СтраницаМногихДетей',
					items:
					[
					]
				},
				{
					title:'СтраницаОдногоРебенка',
					items:
					[
					]
				},
			]
		},
					]
				},
			]
		},
					]
				},
			]
		},
	]
});