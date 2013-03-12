Ext.define('Справочники.СпискиПрофессийДолжностейЛьготногоПенсионногоОбеспечения.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:666px;height:261px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Профессии и должности льготного пенсионного обеспечения',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:650px;height:220px;',
			height: 220,width: 650,
			columns:
			[
				{
					text:'',
					width:'32',
				},
				{
					text:'Код',
					width:'160',
				},
				{
					text:'Наименование',
					width:'320',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:666px;height:25px;',
			items:
			[
				{
					text:'Действие1',
				},
				{
					text:'Действие6',
				},
				'-',
				{
					text:'Действие8',
				},
				{
					text:'Действие',
				},
				'-',
				{
					text:'Действие8',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие7',
				},
				'-',
				{
					text:'Действие4',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие2',
				},
				{
					text:'',
				},
				{
					text:'Подбор из списка №2',
				},
				{
					text:'Подбор из списка №1',
				},
				{
					text:'Действие4',
				},
				'-',
				{
					text:'Действие2',
				},
				{
					text:'Действие10',
				},
				{
					text:'Действие10',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие9',
				},
				'-',
				'-',
				{
					text:'Действие9',
				},
				'-',
				'-',
				'-',
				{
					text:'',
				},
				{
					text:'',
				},
				'-',
				{
					text:'Действие7',
				},
				{
					text:'Действие11',
				},
			]
		},
	]
});