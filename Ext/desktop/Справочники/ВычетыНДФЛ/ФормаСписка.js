Ext.define('Справочники.ВычетыНДФЛ.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:717px;height:320px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Вычеты по НДФЛ',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:32px;width:701px;height:280px;',
			height: 280,width: 701,
			columns:
			[
				{
					text:'',
					width:'32',
				},
				{
					text:'Код',
					width:'60',
				},
				{
					text:'Наименование',
					width:'220',
				},
				{
					text:'Коды в отчетности',
					width:'144',
				},
				{
					text:'с 2011 г.',
					width:'48',
				},
				{
					text:'2010 г.',
					width:'48',
				},
				{
					text:'2009 г.',
					width:'48',
				},
				{
					text:'2008 г.',
					width:'40',
				},
				{
					text:'2007 г.',
					width:'40',
				},
				{
					text:'Наименования прошлых лет',
					width:'200',
				},
				{
					text:'2009 - 2010 гг.',
					width:'100',
				},
				{
					text:'2008 г.',
					width:'100',
				},
				{
					text:'2005 - 2007 гг.',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:717px;height:24px;',
			items:
			[
				{
					text:'Действие4',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие10',
				},
				{
					text:'Действие7',
				},
				{
					text:'',
				},
				{
					text:'Действие11',
				},
				{
					text:'Действие9',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие9',
				},
				'-',
				{
					text:'Действие5',
				},
				{
					text:'',
				},
				'-',
				'-',
				{
					text:'Действие6',
				},
				'-',
				'-',
				{
					text:'',
				},
				'-',
				{
					text:'Действие6',
				},
				{
					text:'Действие1',
				},
				{
					text:'',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие4',
				},
				'-',
				{
					text:'Действие8',
				},
				'-',
				{
					text:'Действие',
				},
				'-',
				{
					text:'Действие2',
				},
				{
					text:'Действие3',
				},
			]
		},
	]
});