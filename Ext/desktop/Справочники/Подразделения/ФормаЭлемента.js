Ext.define('Справочники.Подразделения.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 472,width: 538,
	iconCls: 'bogus',
	title: 'Подразделения',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:430px;top:33px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:91px;top:33px;width:300px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:538px;height:25px;',
			items:
			[
				{
					text:'Подменю',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие3',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Права',
				},
				{
					text:'Действие5',
				},
				{
					text:'РазделительПрава',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие1',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'РедактироватьКодНомер',
				},
				{
					text:'Действие2',
				},
				{
					text:'Разделитель',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:447px;width:538px;height:25px;',
			items:
			[
				{
					text:'Разделитель1',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидПодразделения',
			style: 'position:absolute;left:93px;top:93px;width:295px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидЦФО',
			style: 'position:absolute;left:93px;top:120px;width:295px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОсновнойПроект',
			style: 'position:absolute;left:93px;top:143px;width:295px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:186px;width:522px;height:253px;',
			height: 253,width: 522,
			items:
			[
				{
					title:'Основные',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:23px;width:510px;height:206px;',
			height: 206,width: 510,
			columns:
			[
				{
					text:'Организация',
				},
				{
					text:'ПодразделениеОрганизации',
				},
			]
		},
					]
				},
				{
					title:'СвойстваКатегории',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:257px;top:26px;width:257px;height:201px;',
			height: 201,width: 257,
			columns:
			[
				{
					text:'ПометкаУдаления',
				},
				{
					text:'Принадлежность',
				},
				{
					text:'Категория',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:26px;width:247px;height:201px;',
			height: 201,width: 247,
			columns:
			[
				{
					text:'ПометкаУдаления',
				},
				{
					text:'Свойство',
				},
				{
					text:'Значение',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:63px;width:247px;height:24px;',
			items:
			[
				{
					text:'Действие',
				},
				{
					text:'Действия',
				},
				{
					text:'Действие1',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:257px;top:63px;width:247px;height:24px;',
			items:
			[
				{
					text:'Действие1',
				},
				{
					text:'Действия',
				},
				{
					text:'Действие',
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:170px;width:522px;height:16px;',
			height: 16,width: 522,
			items:
			[
				{
					title:'Страница1',
				},
			]
		},
	]
});