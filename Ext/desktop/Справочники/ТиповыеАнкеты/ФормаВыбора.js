Ext.define('Справочники.ТиповыеАнкеты.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:601px;height:321px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Типовые анкеты',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:174px;top:33px;width:419px;height:280px;',
			height: 280,width: 419,
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
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:160px;height:280px;',
			height: 280,width: 160,
			columns:
			[
				{
					text:'Наименование',
					width:'160',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:601px;height:25px;',
			items:
			[
				'-',
				'-',
				{
					text:'Действие5',
				},
				{
					text:'Действие7',
				},
				'-',
				{
					text:'Действие3',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие6',
				},
				'-',
				'-',
				{
					text:'Действие15',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие12',
				},
				{
					text:'Действие14',
				},
				{
					text:'Действие6',
				},
				{
					text:'',
				},
				'-',
				{
					text:'Действие5',
				},
				{
					text:'Действие2',
				},
				'-',
				{
					text:'Действие13',
				},
				'-',
				'-',
				{
					text:'',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие11',
				},
				{
					text:'Действие7',
				},
				{
					text:'',
				},
				'-',
				'-',
				{
					text:'Действие11',
				},
				{
					text:'Действие12',
				},
				{
					text:'Действие10',
				},
				'-',
				{
					text:'Действие1',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие9',
				},
				{
					text:'Действие9',
				},
				{
					text:'',
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
					text:'Действие10',
				},
				{
					text:'Действие формы выбрать',
				},
				'-',
			]
		},
	]
});