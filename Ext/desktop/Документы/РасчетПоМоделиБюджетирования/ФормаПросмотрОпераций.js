Ext.define('Документы.РасчетПоМоделиБюджетирования.ФормаПросмотрОпераций',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:653px;height:371px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Сформированные бюджетные операции',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:653px;height:25px;',
			items:
			[
				{
					text:'Включить возможность изменения',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:346px;width:653px;height:25px;',
			items:
			[
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:58px;width:637px;height:280px;',
			height: 280,width: 637,
			columns:
			[
				{
					text:'N',
					width:'28',
				},
				{
					text:'Период',
					width:'100',
				},
				{
					text:'Статья оборотов',
					width:'100',
				},
				{
					text:'Валюта',
					width:'100',
				},
				{
					text:'ЦФО',
					width:'100',
				},
				{
					text:'Проект',
					width:'100',
				},
				{
					text:'Контрагент',
					width:'100',
				},
				{
					text:'Номенклатура',
					width:'100',
				},
				{
					text:'Количество',
					width:'100',
				},
				{
					text:'Сумма',
					width:'100',
				},
				{
					text:'Влияющая операция',
					width:'109',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:33px;width:637px;height:25px;',
			height: 25,width: 637,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:637px;height:25px;',
			items:
			[
				{
					text:'Действие4',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие2',
				},
			]
		},
					]
				},
			]
		},
	]
});