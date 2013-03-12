Ext.define('Справочники.ВычетыНДФЛ.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:554px;height:321px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Вычеты по НДФЛ',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:538px;height:280px;',
			height: 280,width: 538,
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
					width:'203',
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
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:554px;height:25px;',
			items:
			[
				{
					text:'Действие10',
				},
				'-',
				{
					text:'Действие',
				},
				{
					text:'Действие6',
				},
				{
					text:'',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие формы выбрать',
				},
				{
					text:'Действие6',
				},
				'-',
				{
					text:'Действие9',
				},
				'-',
				{
					text:'',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие8',
				},
				'-',
				'-',
				'-',
				{
					text:'Действие3',
				},
				{
					text:'',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие4',
				},
				'-',
				'-',
				{
					text:'Действие2',
				},
				'-',
				{
					text:'Действие7',
				},
				{
					text:'',
				},
				{
					text:'Действие9',
				},
				{
					text:'Действие5',
				},
				'-',
				{
					text:'Действие11',
				},
			]
		},
	]
});