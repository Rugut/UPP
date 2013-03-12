Ext.define('Документы.ВыгрузкаРегламентированныхОтчетов.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:704px;height:391px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Выгрузка регламентированных отчетов',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:704px;height:25px;',
			items:
			[
				{
					text:'Действие1',
				},
				{
					text:'Действие9',
				},
				'-',
				{
					text:'',
				},
				{
					text:'Действие13',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие10',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие1',
				},
				{
					text:'',
				},
				{
					text:'Действие6',
				},
				'-',
				'-',
				{
					text:'Действие4',
				},
				{
					text:'Действие14',
				},
				'-',
				{
					text:'Действие2',
				},
				'-',
				{
					text:'Действие5',
				},
				{
					text:'Действие4',
				},
				'-',
				'-',
				{
					text:'Действие5',
				},
				{
					text:'',
				},
				{
					text:'Действие12',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие',
				},
				'-',
				{
					text:'Действие10',
				},
				{
					text:'Действие8',
				},
				'-',
				{
					text:'Действие3',
				},
				'-',
				{
					text:'Действие7',
				},
				'-',
				{
					text:'Действие9',
				},
				{
					text:'Действие2',
				},
				{
					text:'',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие11',
				},
				'-',
				{
					text:'Действие8',
				},
				'-',
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:688px;height:151px;',
			height: 151,width: 688,
			columns:
			[
				{
					text:'',
					width:'32',
				},
				{
					text:'Дата',
					width:'120',
				},
				{
					text:'Номер',
					width:'96',
				},
				{
					text:'Период',
					width:'120',
				},
				{
					text:'Организация',
					width:'120',
				},
				{
					text:'Комментарий',
					width:'120',
				},
				{
					text:'Период По',
					width:'84',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:190px;width:688px;height:193px;',
			height: 193,width: 688,
			items:
			[
				{
					title:'Отчеты',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:6px;width:674px;height:161px;',
			height: 161,width: 674,
			columns:
			[
				{
					text:'N',
					width:'28',
				},
				{
					text:'Отчеты',
					width:'605',
				},
			]
		},
					]
				},
				{
					title:'Тексты выгрузки',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:6px;width:182px;height:161px;',
			height: 161,width: 182,
			columns:
			[
				{
					text:'N',
					width:'28',
				},
				{
					text:'Тип',
					width:'100',
				},
				{
					text:'Имя файла',
					width:'100',
				},
				{
					text:'Текст',
					width:'100',
				},
			]
		},
		{
			xtype: 'textarea',
			hideLabel: true,
			name: 'ТекстВыгрузки',
			style: 'position:absolute;left:194px;top:6px;width:486px;height:161px;',
		},
					]
				},
			]
		},
	]
});