Ext.define('Отчеты.ОтчетОКонтактнойИнформации.ФормаНастройки',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:490px;height:397px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Настройка ""Отчет о контактной информации""',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:372px;width:490px;height:25px;',
			items:
			[
				{
					text:'Закрыть',
				},
				'-',
				{
					text:'ОК',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:8px;width:474px;height:356px;',
			height: 356,width: 474,
			items:
			[
				{
					title:'Общие',
					items:
					[
		{
			xtype: 'checkbox',
			boxLabel: 'Использовать свойства и категории',
			style: 'position:absolute;left:6px;top:30px;width:210px;height:15px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:113px;width:460px;height:160px;',
			height: 160,width: 460,
			columns:
			[
				{
					text:'',
					width:'20',
				},
				{
					text:'Тип',
					width:'120',
				},
				{
					text:'Вид',
					width:'220',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:89px;width:250px;height:24px;',
			items:
			[
				{
					text:'Действие8',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие5',
				},
				{
					text:'',
				},
				'-',
				{
					text:'',
				},
				{
					text:'Действие6',
				},
				'-',
			]
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Выводить персональные значения видов контактной информации для объектов, содержащие строку:',
			style: 'position:absolute;left:7px;top:278px;width:436px;height:28px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтрокаПерсональныхВидовКИ',
			style: 'position:absolute;left:7px;top:311px;width:459px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Раскрашивать группировки',
			style: 'position:absolute;left:6px;top:50px;width:164px;height:15px;',
		},
					]
				},
				{
					title:'Группировки',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:460px;height:306px;',
			height: 306,width: 460,
			columns:
			[
				{
					text:'Поле',
					width:'305',
				},
				{
					text:'Тип',
					width:'122',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:459px;height:24px;',
			items:
			[
			]
		},
					]
				},
				{
					title:'Отбор',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:460px;height:306px;',
			height: 306,width: 460,
			columns:
			[
				{
					text:'',
					width:'18',
				},
				{
					text:'Поле',
					width:'125',
				},
				{
					text:'Тип сравнения',
					width:'82',
				},
				{
					text:'Значение',
					width:'100',
				},
				{
					text:'С',
					width:'100',
				},
				{
					text:'По',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:460px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Объект отчета:',
			style: 'position:absolute;left:6px;top:6px;width:80px;height:19px;',
		},
					]
				},
				{
					title:'Сортировка',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:460px;height:306px;',
			height: 306,width: 460,
			columns:
			[
				{
					text:'Поле',
					width:'331',
				},
				{
					text:'Направление',
					width:'94',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:460px;height:24px;',
			items:
			[
			]
		},
					]
				},
			]
		},
	]
});