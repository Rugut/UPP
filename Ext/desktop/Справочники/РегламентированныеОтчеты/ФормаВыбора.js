Ext.define('Справочники.РегламентированныеОтчеты.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:533px;height:390px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Регламентированные отчеты',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:174px;top:33px;width:351px;height:280px;',
			height: 280,width: 351,
			columns:
			[
				{
					text:'',
					width:'32',
				},
				{
					text:'Код',
					width:'48',
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
			style: 'position:absolute;left:0px;top:0px;width:533px;height:25px;',
			items:
			[
				{
					text:'Действие1',
				},
				'-',
				'-',
				{
					text:'Действие3',
				},
				{
					text:'Действие',
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
				{
					text:'Действие8',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие12',
				},
				{
					text:'Действие10',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие2',
				},
				'-',
				{
					text:'Действие7',
				},
				{
					text:'Действие1',
				},
				'-',
				{
					text:'Действие13',
				},
				{
					text:'Действие14',
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
				{
					text:'Действие9',
				},
				'-',
				{
					text:'Действие12',
				},
				{
					text:'',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие9',
				},
				'-',
				{
					text:'Действие10',
				},
				{
					text:'Действие15',
				},
				{
					text:'',
				},
				'-',
				{
					text:'Действие4',
				},
				{
					text:'Действие3',
				},
				'-',
				{
					text:'Действие4',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие11',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьОписаниеОтчета',
			text: '',
			style: 'position:absolute;left:8px;top:342px;width:466px;height:40px;',
		},
	]
});