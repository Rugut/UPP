Ext.define('Справочники.ДоходыНДФЛ.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:680px;height:320px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Коды доходов НДФЛ',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:664px;height:279px;',
			height: 279,width: 664,
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
					width:'243',
				},
				{
					text:'Ставка',
					width:'60',
				},
				{
					text:'Код для отчетности',
					width:'60',
				},
				{
					text:'Не облагается у налогового агента',
					width:'80',
				},
				{
					text:'Не отражается в отчетности с 2010 г.',
					width:'80',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:680px;height:25px;',
			items:
			[
				'-',
				{
					text:'Действие5',
				},
				'-',
				{
					text:'Действие5',
				},
				{
					text:'Действие6',
				},
				'-',
				{
					text:'Действие',
				},
				{
					text:'Действие7',
				},
				'-',
				{
					text:'Действие3',
				},
				{
					text:'Действие8',
				},
				'-',
				{
					text:'Действие11',
				},
				{
					text:'',
				},
				'-',
				'-',
				{
					text:'Действие7',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие1',
				},
				{
					text:'',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие10',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие',
				},
				'-',
				{
					text:'Действие6',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие9',
				},
				'-',
				{
					text:'Действие9',
				},
				{
					text:'',
				},
			]
		},
	]
});