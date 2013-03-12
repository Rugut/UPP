Ext.define('Справочники.ПрофессииРабочих.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:537px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Профессии рабочих',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:521px;height:259px;',
			height: 259,width: 521,
			columns:
			[
				{
					text:'',
					width:'32',
				},
				{
					text:'Код',
					width:'80',
				},
				{
					text:'Наименование',
					width:'220',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:537px;height:25px;',
			items:
			[
				{
					text:'Действие10',
				},
				{
					text:'Подбор из ОКПДТР',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие9',
				},
				{
					text:'Действие9',
				},
				'-',
				{
					text:'',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие4',
				},
				'-',
				'-',
				{
					text:'Действие',
				},
				'-',
				{
					text:'Действие2',
				},
				{
					text:'Действие11',
				},
				'-',
				{
					text:'Действие10',
				},
				{
					text:'Действие6',
				},
				'-',
				'-',
				{
					text:'Действие5',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие3',
				},
				'-',
				{
					text:'Действие8',
				},
				'-',
				{
					text:'',
				},
				'-',
				{
					text:'Действие7',
				},
				{
					text:'',
				},
				{
					text:'Действие6',
				},
			]
		},
	]
});