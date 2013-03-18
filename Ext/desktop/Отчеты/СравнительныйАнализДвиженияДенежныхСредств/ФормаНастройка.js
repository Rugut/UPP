Ext.define('Отчеты.СравнительныйАнализДвиженияДенежныхСредств.ФормаНастройка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:490px;height:389px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: '',
	
	items:
	[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:8px;width:474px;height:348px;',
			height: 348,width: 474,
			items:
			[
				{
					title:'Общие',
					items:
					[
		{
			xtype: 'checkbox',
			boxLabel: 'Раскрашивать измерения',
			style: 'position:absolute;left:286px;top:254px;width:160px;height:15px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:194px;width:260px;height:128px;',
			height: 128,width: 260,
			columns:
			[
				{
					text:'№',
					width:'28',
				},
				{
					text:'Показатель',
					width:'220',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:170px;width:460px;height:24px;',
			items:
			[
				{
					text:'&Переместить вверх',
				},
				{
					text:'&Переместить вниз',
				},
				{
					text:'Установить все',
				},
				{
					text:'Снять все',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:46px;width:460px;height:100px;',
			height: 100,width: 460,
			columns:
			[
				{
					text:'№',
					width:'28',
				},
				{
					text:'Вид данных',
					width:'100',
				},
				{
					text:'Сценарий',
					width:'186',
				},
				{
					text:'Дата начала',
					width:'80',
				},
				{
					text:'Дата конца',
					width:'88',
				},
			]
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Выводить отклонения, абс.',
			style: 'position:absolute;left:286px;top:194px;width:164px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Выводить отклонения, %',
			style: 'position:absolute;left:286px;top:214px;width:152px;height:15px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:22px;width:460px;height:24px;',
			items:
			[
				{
					text:'&Добавить',
				},
				{
					text:'&Изменить',
				},
				{
					text:'&Удалить',
				},
				{
					text:'Закончить редактирование',
				},
				{
					text:'&Переместить вверх',
				},
				{
					text:'&Переместить вниз',
				},
			]
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Детализировать по периодам',
			style: 'position:absolute;left:286px;top:234px;width:176px;height:15px;',
		},
					]
				},
				{
					title:'Группировки',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:25px;width:460px;height:297px;',
			height: 297,width: 460,
			columns:
			[
				{
					text:'Поле',
					width:'100',
				},
				{
					text:'Тип',
					width:'40',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:460px;height:25px;',
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
			style: 'position:absolute;left:6px;top:24px;width:460px;height:298px;',
			height: 298,width: 460,
			columns:
			[
				{
					text:'',
					width:'20',
				},
				{
					text:'Поле',
					width:'100',
				},
				{
					text:'Тип сравнения',
					width:'60',
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
					]
				},
				{
					title:'Поля',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:460px;height:298px;',
			height: 298,width: 460,
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
			style: 'position:absolute;left:6px;top:0px;width:460px;height:24px;',
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
			style: 'position:absolute;left:0px;top:364px;width:490px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'ОК',
				},
				'-',
				{
					text:'Закрыть',
				},
				'-',
				{
					text:'Справка',
				},
			]
		},
	]
});