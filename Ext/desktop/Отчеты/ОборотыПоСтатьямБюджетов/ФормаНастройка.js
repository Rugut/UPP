Ext.define('Отчеты.ОборотыПоСтатьямБюджетов.ФормаНастройка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:490px;height:382px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: '',
	
	items:
	[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:8px;width:474px;height:341px;',
			height: 341,width: 474,
			items:
			[
				{
					title:'Общие',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьСценарий',
			text: 'Сценарий:',
			style: 'position:absolute;left:6px;top:54px;width:88px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Раскрашивать измерения',
			style: 'position:absolute;left:6px;top:102px;width:154px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Сценарий',
			style: 'position:absolute;left:96px;top:54px;width:370px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтатьяБаланса',
			style: 'position:absolute;left:96px;top:78px;width:370px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьБюджет',
			text: 'Статья баланса:',
			style: 'position:absolute;left:6px;top:78px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись36',
			text: 'Период с:',
			style: 'position:absolute;left:6px;top:6px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНач',
			style: 'position:absolute;left:96px;top:6px;width:96px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись37',
			text: 'по:',
			style: 'position:absolute;left:194px;top:6px;width:16px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаКон',
			style: 'position:absolute;left:212px;top:6px;width:96px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериода',
			text: '...',
			style: 'position:absolute;left:310px;top:6px;width:20px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:188px;width:460px;height:127px;',
			height: 127,width: 460,
			columns:
			[
				{
					text:'',
					width:'21',
				},
				{
					text:'Показатель',
					width:'280',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:164px;width:142px;height:24px;',
			items:
			[
				{
					text:'Снять все',
				},
				{
					text:'&Переместить вверх',
				},
				{
					text:'Установить все',
				},
				{
					text:'&Переместить вниз',
				},
			]
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Выводить в разных колонках',
			style: 'position:absolute;left:294px;top:169px;width:172px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Выводить статьи с нулевыми оборотами',
			style: 'position:absolute;left:6px;top:126px;width:235px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидДанныхОтчета',
			style: 'position:absolute;left:96px;top:30px;width:370px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Вид данных:',
			style: 'position:absolute;left:6px;top:30px;width:88px;height:19px;',
		},
					]
				},
				{
					title:'Группировки',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:212px;height:291px;',
			height: 291,width: 212,
			columns:
			[
				{
					text:'Группировки строк',
					width:'120',
				},
				{
					text:'Тип',
					width:'80',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:212px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:254px;top:0px;width:212px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:254px;top:24px;width:212px;height:291px;',
			height: 291,width: 212,
			columns:
			[
				{
					text:'Группировки колонок',
					width:'120',
				},
				{
					text:'Тип',
					width:'80',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:224px;top:100px;width:24px;height:80px;',
			items:
			[
				{
					text:' >',
				},
				{
					text:' <',
				},
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
			style: 'position:absolute;left:6px;top:24px;width:460px;height:290px;',
			height: 290,width: 460,
			columns:
			[
				{
					text:'',
					width:'20',
				},
				{
					text:'Поле',
					width:'120',
				},
				{
					text:'Тип сравнения',
					width:'80',
				},
				{
					text:'Значение',
					width:'240',
				},
				{
					text:'С',
					width:'120',
				},
				{
					text:'По',
					width:'120',
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
				{
					title:'Поля',
					items:
					[
		{
			xtype: 'checkbox',
			boxLabel: 'Выводить дополнительные поля в отдельной колонке',
			style: 'position:absolute;left:6px;top:6px;width:303px;height:15px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:52px;width:460px;height:260px;',
			height: 260,width: 460,
			columns:
			[
				{
					text:'Поле',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:28px;width:460px;height:24px;',
			items:
			[
			]
		},
					]
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:357px;width:490px;height:25px;',
			items:
			[
				{
					text:'Закрыть',
				},
				'-',
				{
					text:'Справка',
				},
				{
					text:'ОК',
				},
				'-',
			]
		},
	]
});